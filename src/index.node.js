import fs from 'fs'
import { createMemoryNavigation, NotFoundError } from 'navi'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { NaviProvider, View } from 'react-navi'
import NaviHelmetProvider from 'react-navi-helmet-async'
import { ServerStyleSheet } from 'styled-components/macro'
import GlobalResetStyle from './reset.css'
import routes from './routes'

const renderer = async (request, response) => {
  let navigation, sheet
  let helmetContext = {}
  let template = fs.readFileSync(process.env.HTML_TEMPLATE_PATH, 'utf8')
  let [head, bodyTags, rootTags, tail] = template.split(
    /%HEAD_CONTENT%|%BODY_CONTENT%|%ROOT_CONTENT%/g,
  )

  try {
    navigation = createMemoryNavigation({
      context: {
        currentUser: undefined,
        ssr: true,
      },
      request,
      routes,
    })
    sheet = new ServerStyleSheet()

    let route = await navigation.getRoute()

    // The index.html file is a template, which will have environment variables
    // and bundled scripts and stylesheets injected during the build step, and
    // placed at the location specified by `process.env.HTML_TEMPLATE_PATH`.
    //
    // To customize the rendered HTML, you can add other placeholder strings,
    // and replace them within this function -- just as %RENDERED_CONTENT% is
    // replaced. Note however that if you name the placeholder after an
    // environment variable available at build time, then it will be
    // automatically replaced by the build script.
    let body = renderToString(
      sheet.collectStyles(
        <NaviHelmetProvider context={helmetContext} canUseDOM={false}>
          <NaviProvider navigation={navigation}>
            {/*
              Putting the global styles any deeper in the tree causes them to
              re-render on each navigation, even in production.
            */}
            <GlobalResetStyle />
            <View />
          </NaviProvider>
        </NaviHelmetProvider>,
      ),
    )

    let helmet = helmetContext.helmet
    let metaHTML = `
      ${(helmet.title && helmet.title.toString()) ||
        '<title>' + route.title + '</title>'}
      ${helmet.meta && helmet.meta.toString()}
      ${helmet.link && helmet.link.toString()}
    `

    // Extract the navigation state into a script tag to bootstrap the browser Navigation.
    let state = `<script>window.__NAVI_STATE__=${JSON.stringify(
      navigation.extractState() || {},
    ).replace(/</g, '\\u003c')};</script>`

    let styleTags = sheet.getStyleTags()
    let html =
      head + metaHTML + bodyTags + state + styleTags + rootTags + body + tail
    response.send(html)
  } catch (error) {
    if (error instanceof NotFoundError) {
      let html = head + '<title>Not Found</title>' + bodyTags + rootTags + tail
      response.status(404).send(html)
      return
    }

    let html
    console.error(error)
    if (process.env.NODE_ENV === 'production') {
      html = `<h1>500 Error</h1>`
    } else {
      html =
        `<h1>500 Error</h1><pre>${String(error)}</pre>` +
        head +
        bodyTags +
        rootTags +
        tail
    }
    response.status(500).send(html)
  } finally {
    sheet.seal()
    navigation.dispose()
  }
}

export default renderer

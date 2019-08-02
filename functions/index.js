const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp()

let renderer
if (process.env.NODE_ENV === 'production') {
  // Load the renderer from the packaged version when deploying
  renderer = require('app').default
} else {
  // Load the renderer directly from the build directory during development.
  // Note: the renderer is not used in development as CURA includes its own
  // renderer, but the functions emulator fails without this.
  renderer = require('../build/node').default
}

exports.renderer = functions.https.onRequest(renderer)

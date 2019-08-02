rm functions/renderer.tgz
yarn build
mv "$(npm pack)" functions/renderer.tgz
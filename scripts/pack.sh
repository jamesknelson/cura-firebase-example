rm functions/renderer.tgz
npm run build
mv "$(npm pack)" functions/renderer.tgz
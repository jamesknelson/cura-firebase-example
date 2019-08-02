const functions = require('firebase-functions')
const renderer = require('./renderer')

exports.renderer = functions.https.onRequest(renderer)

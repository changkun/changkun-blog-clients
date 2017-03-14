const electron = require('electron')
const app = electron.app

function setupProtocols () {
  app.setAsDefaultProtocolClient('changkun')
}

module.exports.setupProtocols = setupProtocols
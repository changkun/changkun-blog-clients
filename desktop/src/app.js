'use strict'

const electron = require('electron')
const app = electron.app

const network = require('./windows/controllers/network')
const main = require('./windows/controllers/main')
const menu = require('./handlers/menu')
const tray = require('./handlers/tray')

app.on('ready', () => {
  network.createNetChecker(() => {
    main.createMain()
    menu.createMenu()
    tray.createTray()
  })
})
app.on('activate', () => {
  main.createMain()
})

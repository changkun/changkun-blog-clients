'use strict'

const electron = require('electron')
const app = electron.app

const main = require('./windows/controllers/main')
const menu = require('./handlers/menu')
const tray = require('./handlers/tray')

app.on('ready', () => {
  main.createMain()
  menu.createMenu()
  tray.createTray()
})
app.on('activate', () => {
  main.createMain()
})

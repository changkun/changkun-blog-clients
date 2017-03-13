'use strict'

const electron = require('electron')

const shell = electron.shell
const BrowserWindow = electron.BrowserWindow

const common = require('../../utils/common')
const lib = require('../../utils/lib')

// global main window.
let mainWindow

// window creator
function createMain () {
  if (mainWindow) {
    // only on macOS, however this scope will never
    // be called on windows/linux, thus it is safe
    mainWindow.show()
    return
  }
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    minWidth: 1100,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      preload: `${__dirname}/../../handlers/preload.js`
    }
  })
  mainWindow.loadURL(common.url.home)
  mainWindow.on('close', (event) => {
    if (process.platform === 'darwin') {
      if (mainWindow.isVisible()) {
        event.preventDefault()
        mainWindow.hide()
      }
    } else lib.exit(true)
  })
  mainWindow.webContents.on('will-navigate', (event, url) => {
    event.preventDefault()
    if (url.match('login-callback')) mainWindow.loadURL(common.url.home)
    else if (url.match('changkun') == null) shell.openExternal(url)
    else mainWindow.loadURL(url)
  })
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    if (url.match('login-callback')) mainWindow.loadURL(common.url.home)
    else if (url.match('changkun') == null) shell.openExternal(url)
    else mainWindow.loadURL(url)
  })
}

module.exports.createMain = createMain

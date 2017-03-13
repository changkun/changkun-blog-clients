'use strict'

const path = require('path')

const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const Tray = electron.Tray

const common = require('../utils/common')
const lib = require('../utils/lib')

let tray = null

function createTray () {
  if (process.platform === 'darwin') {
    tray = new Tray(path.join(__dirname, '../resources/tray.png'))
    tray.setToolTip('This is my application.')
    tray.setContextMenu(Menu.buildFromTemplate([
      {
        label: common.tray.show,
        click: () => BrowserWindow.getAllWindows().forEach(win => win.show())
      }, {
        label: common.tray.exit,
        click: () => lib.exit(true)
      }
    ]))
  }
}

module.exports.createTray = createTray

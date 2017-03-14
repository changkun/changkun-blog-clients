'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

class lib {
  static exit (cleanCookie) {
    if (cleanCookie) {
      BrowserWindow.getAllWindows().forEach((win) => {
        win.webContents.session.clearStorageData({storages: ['cookies']}, () => {
          console.log('Successfully eliminate cookies')
        })
      })
    }
    app.quit()
    app.exit(0)
  }
}

module.exports = lib

'use strict'

const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const dialog = electron.dialog

const lib = require('../../utils/lib')

let checker

function createNetChecker (onlineProcessCallback) {
  checker = new BrowserWindow({ width: 0, height: 0, show: false })
  checker.loadURL(`file://${__dirname}/../views/network.html`)
  ipcMain.on('network', (event, status) => {
    switch (status) {
      case 'online': onlineProcessCallback(); break
      case 'offline':
        dialog.showMessageBox({
          type: 'error',
          buttons: [],
          title: '警告',
          message: '设备离线, 应用必须退出'},
        () => {
          lib.exit(true)
        }); break
      default: console.log('unknown'); break
    }
  })
}

module.exports.createNetChecker = createNetChecker

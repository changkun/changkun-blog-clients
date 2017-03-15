const electron = require('electron')
const { autoUpdater } = require('electron-updater')

// const lib = require('../utils/lib')
// const common = require('../utils/common')

const dialog = electron.dialog

let updater
autoUpdater.autoDownload = false
autoUpdater.on('error', (event, error) => {
  dialog.showErrorBox('错误', error)
})
autoUpdater.on('checking-for-update', () => {
})
autoUpdater.on('update-available', () => {
  dialog.showMessageBox({
    type: 'info',
    title: '发现可用更新',
    message: '发现可用更新, 是否现在更新?',
    buttons: ['确定', '取消']
  }, (buttonIndex) => {
    if (buttonIndex === 0) {
      autoUpdater.downloadUpdate()
    } else {
      updater.enabled = true
      updater = null
    }
  })
})
autoUpdater.on('update-not-available', () => {
  dialog.showMessageBox({title: '安装更新', message: '当前版本已经是最新版.'})
  updater.enabled = true
  updater = null
})
autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox({title: '安装更新', message: '即将安装更新，应用将自动退出...'}, () => {
    autoUpdater.quitAndInstall()
  })
})

function checkForUpdates (menuItem, focusedWindow, event) {
  updater = menuItem
  updater.enabled = false
  autoUpdater.checkForUpdates()
  // lib.externalOpenURL(common.url.release)
}

module.exports.checkForUpdates = checkForUpdates

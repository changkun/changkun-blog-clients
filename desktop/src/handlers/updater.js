const electron = require('electron')
const { autoUpdater } = require('electron-updater')
const dialog = electron.dialog

let updater
autoUpdater.autoDownload = false

function setupUpdateEvents () {
  autoUpdater.on('error', (event, error) => {
    dialog.showErrorBox('错误', error)
  })
  autoUpdater.on('checking-for-update', () => {
    console.log('checking-for-update')
  })
  autoUpdater.on('update-available', () => {
    console.log('update-available')
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
    console.log('update-not-available')
    dialog.showMessageBox('暂无可用更新', '当前版本已是最新版本.')
    updater.enabled = true
    updater = null
  })
  autoUpdater.on('update-downloaded', () => {
    dialog.showMessageBox({title: '安装更新', message: '即将安装更新，应用将自动退出...'}, () => {
      autoUpdater.quitAndInstall()
    })
  })
}

function checkForUpdates (menuItem, focusedWindow, event) {
  menuItem.enabled = false
  updater = menuItem
  if (!updater) setupUpdateEvents()
  autoUpdater.checkForUpdates()
  console.log('123')
}

module.exports.checkForUpdates = checkForUpdates

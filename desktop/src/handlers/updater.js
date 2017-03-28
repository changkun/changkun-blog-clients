const {dialog} = require('electron')
const { autoUpdater } = require('electron-updater')

let updater
autoUpdater.autoDownload = false
autoUpdater.on('error', (event, error) => {
  dialog.showErrorBox('出现错误: ', error == null ? "unknown" : (error.stack || error).toString())
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
   
  updater.enabled = true
  updater = null
})
autoUpdater.on('update-downloaded', () => {
  dialog.showMessageBox({title: '安装更新', message: '应用将在退出后完成更新...'}, () => {
    autoUpdater.quitAndInstall()
  })
})

function checkForUpdates (menuItem, focusedWindow, event) {
  updater = menuItem
  updater.enabled = false
  autoUpdater.checkForUpdates()
}

module.exports.checkForUpdates = checkForUpdates

'use strict'

const electron = require('electron')
const shell = electron.shell
const Menu = electron.Menu

const common = require('../utils/common')
const lib = require('../utils/lib')

function clickMenuItem (url) {
  return (item, focusedWindow) => {
    // this check is important, otherwise it will cause an
    // error such as when the focused window is about pannel
    if (focusedWindow) {
      focusedWindow.loadURL(url)
    }
  }
}

let menu = [
  {
    label: (() => {
      if (process.platform === 'darwin') return common.menu.name
      else return common.menu.option
    })(),
    submenu: [
      {
        label: common.menu.about,
        role: 'about',
        visible: (() => {
          if (process.platform === 'darwin') return true
          else return false
        })()
      }, {
        type: 'separator',
        visible: (() => {
          if (process.platform === 'darwin') return true
          else return false
        })()
      }, {
        label: common.menu.version,
        enabled: false
      }, {
        type: 'separator'
      }, {
        label: common.menu.close,
        accelerator: 'Cmd+W',
        visible: (() => {
          if (process.platform === 'darwin') return true
          else return false
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.hide()
        }
      }, {
        label: common.menu.quit,
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
          lib.exit(true)
        }
      }
    ]
  }, {
    label: common.menu.edit,
    submenu: [
      {
        label: common.menu.undo,
        role: 'undo'
      }, {
        label: common.menu.redo,
        role: 'redo'
      }, {
        type: 'separator'
      }, {
        label: common.menu.copy,
        role: 'copy'
      }, {
        label: common.menu.paste,
        role: 'paste'
      }
    ]
  }, {
    label: common.menu.view,
    submenu: [
      {
        label: common.menu.home,
        click: clickMenuItem(common.url.home),
        accelerator: 'CmdOrCtrl+H'
      }, {
        type: 'separator'
      }, {
        label: common.menu.archives,
        click: clickMenuItem(common.url.archives),
        accelerator: 'CmdOrCtrl+A'
      }, {
        label: common.menu.topics,
        click: clickMenuItem(common.url.topics),
        accelerator: 'CmdOrCtrl+T'
      }, {
        type: 'separator'
      }, {
        label: common.menu.tags,
        click: clickMenuItem(common.url.tags),
        accelerator: 'CmdOrCtrl+G'
      }
    ]
  }, {
    label: common.menu.help,
    role: 'help',
    submenu: [
      {
        label: common.menu.dev,
        accelerator: 'CmdOrCtrl+Shift+I',
        visible: (() => {
          if (process.env.NODE_ENV === 'debug') return true
          else return false
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.toggleDevTools()
        }
      }, {
        label: common.menu.aboutMe,
        click: clickMenuItem(common.url.about),
        accelerator: 'CmdOrCtrl+B'
      }, {
        type: 'separator'
      }, {
        label: common.menu.thanks,
        click: clickMenuItem(common.url.thanks)
      }, {
        label: common.menu.contact,
        click: () => {
          shell.openExternal(common.url.mail)
        },
        accelerator: 'CmdOrCtrl+M'
      }
    ]
  }
]

function createMenu () {
  menu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(menu)
}

module.exports.createMenu = createMenu

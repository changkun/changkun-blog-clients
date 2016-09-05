const electron      = require('electron');
const app           = electron.app;
const shell         = electron.shell;
const Menu          = electron.Menu;

function clickMenuItem(url) {
    return (item, focusedWindow) => {
        focusedWindow.loadURL(url);
    };
}

let menu = [
    {
        label: (() => {
            if(process.platform == 'darwin') return '欧长坤的博客';
            else return '选项';
        })(),
        submenu: [
            {
                label: `关于`,
                role: 'about',
                visible: (() => {
                    if (process.platform == 'darwin') return true;
                    else return false;
                })
            },
            {
                type: 'separator',
                visible: (()=>{
                    if (process.platform == 'darwin') return true;
                    else return false;
                })()
            },
            {
                label: `当前版本: ${app.getVersion()}`,
                enabled: false
            },
            {
                type: 'separator'
            },
            {
                label: '退出',
                accelerator: 'CmdOrCtrl+Q',
                click: () => {
                    app.exit(0);
                }
            }
        ]
    },
    {
        label: '查看',
        submenu: [
            {
                label: '主页',
                click: clickMenuItem('https://changkun.us/'),
                accelerator: 'CmdOrCtrl+H'
            },
            {
                type: 'separator'
            },
            {
                label: '文章',
                click: clickMenuItem('https://changkun.us/archives'),
                accelerator: 'CmdOrCtrl+A'
            },
            {
                label: '专题',
                click: clickMenuItem('https://changkun.us/topics'),
                accelerator: 'CmdOrCtrl+T'
            },
            {
                type: 'separator'
            },
            {
                label: '标签',
                click: clickMenuItem('https://changkun.us/tags'),
                accelerator: 'CmdOrCtrl+G'
            }
        ]
    },
    {
        label: '帮助',
        role: 'help',
        submenu: [
            {
                label: '关于我',
                click: clickMenuItem('https://changkun.us/about'),
                accelerator: 'CmdOrCtrl+B'
            },
            {
                type: 'separator'
            },
            {
                label: '鸣谢',
                click: clickMenuItem('https://changkun.us/thanks'),
            },
            {
                label: '联系我',
                click: () => {
                    shell.openExternal('mailto:hi[at]changkun.us')
                },
                accelerator: 'CmdOrCtrl+M'
            }
            // ,
            // {
            //     type: 'separator'
            // }
            // ,
            // {
            //     label: '开发者工具',
            //     accelerator: 'CmdOrCtrl+Shift+I',
            //     click: (item, focusedWindow) => {
            //         if (focusedWindow)
            //         focusedWindow.toggleDevTools();
            //     }
            // }
        ]
    }
]

function createMenu() {
    menu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(menu);
}

module.exports.createMenu = createMenu;

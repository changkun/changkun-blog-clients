const ipcRenderer = require('electron').ipcRenderer;

document.addEventListener("DOMNodeInserted", function(event) {
    if (!!window && !(!!window.$)) {
        window.$ = window.jQuery = require('./libs/jquery.min');
    }

});


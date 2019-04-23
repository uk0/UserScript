// @namespace    http://firsh.me/
// @version      1.3.6
// @description  隐藏Title
// @author       zhangjianxin
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Title Help
// @namespace     http://diveintogreasemonkey.org/download/
// @description   script to Modify Title on every page
// @include       *
// @require        https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @require        https://zmatsh.b0.upaiyun.com/lib.js
// @match         *://*.com/*
// @match         *://*.net/*
// @match         *://*.cc/*
// @match         *://*.org/*
// @exclude       https://www.baidu.com/*
// @exclude       https://www.youtube.com/*
// @run-at        document-start
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    var titles = ['https://github.com/kermitt2/biblio-glutton','https://github.com/kermitt2','https://github.com/kermitt2/grobid-example']
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    var pattern = /((第|阅).*(章|节))/
    console.log(document.title);
    if (pattern.test(document.title)){
        link.href = 'https://github.githubassets.com/favicon.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
        document.title = titles[Math.ceil(Math.random()*(titles.length-1))];
    }
    // Your code here...
})();

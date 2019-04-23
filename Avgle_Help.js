// @namespace    http://firsh.me/
// @version      1.3.6
// @description  下载你想要的..
// @author       zhangjianxin
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Avgle Help
// @namespace     http://diveintogreasemonkey.org/download/
// @description   script to Avgle m3u8 on every page
// @include       *
// @require        https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// @require        https://zmatsh.b0.upaiyun.com/lib.js
// @match         *://avgle.com/video/*
// @match         *://www.xvideos.com/*
// @match         *://youtube.com/*
// @exclude       https://www.xvideos.com/*
// @exclude       https://avgle.com/video/*
// @exclude       https://www.youtube.com/*
// @run-at        document-start
// @grant        unsafeWindow
// ==/UserScript==
(function() {
    'use strict';
    (function(open) {
        XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
            this.addEventListener("readystatechange", function() {
                if(this.responseURL.indexOf(".m3u8")>0){
                    console.log("m3u8url="+this.responseURL);
                    ScriptWithJquery(this.responseURL);
                }
            }, false);

            open.call(this, method, url, async, user, pass);
        };

    })(XMLHttpRequest.prototype.open);

    //var $, jQuery;
    var listener = GlobalAjaxListener;
    console.log('started!');
    $ = jQuery = unsafeWindow.jQuery;
    //  var adb_span = $("#player_3x2_close");
    // adb_span.trigger("click");

    ImportCss();
    //ScriptWithJquery();
    function ImportCss() {
        var jqueryScriptBlock = document.createElement('style');
        jqueryScriptBlock.type = 'text/css';
        jqueryScriptBlock.innerHTML = "#m3u8_url{position:fixed;bottom:10%;right:1px;border:1px solid rgba(0, 0, 0, 0.76);padding:3px;z-index:1000;height:40px;width:100%;font-size:16px;cursor:pointer;border-radius: 3px;text-shadow: 1px 1px 3px #35af53;background-color: lightsalmon}";
        document.getElementsByTagName('head')[0].appendChild(jqueryScriptBlock);
    }
    function ScriptWithJquery(m3u8_url) {
        $(document.body).append("<div id='m3u8_url'> "+m3u8_url+" </div>");
        $('#m3u8_url').click(function () {alert("m3u8 url true");});
    }
})();



/*!
* Notiflix ('https://www.notiflix.com')
* Version: 1.9.1 
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2019 Notiflix, MIT Licence ('https://opensource.org/licenses/MIT')
*/

'use strict';

// Notiflix: Notify Default Settings on
var notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    useGoogleFont: false,
    fontFamily: 'Roboto',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    fontAwesomeIconSize: '34px',

    plainText: true, // New Option: v1.3.0 and the next versions
    showOnlyTheLastOne: false, // New Option: v1.8.0 and the next versions

    success: {
        background: '#00b462',
        textColor: '#fff',
        childClassName: 'success',
        notiflixIconColor: 'rgba(0, 0, 0, 0.25)',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    failure: {
        background: '#f44336',
        textColor: '#fff',
        childClassName: 'failure',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-times-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    warning: {
        background: '#f2bd1d',
        textColor: '#fff',
        childClassName: 'warning',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    info: {
        background: '#00bcd4',
        textColor: '#fff',
        childClassName: 'info',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-info-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },
};
// Notiflix: Notify Default Settings off

// Notiflix: Extend on
var extendNotiflix = function () {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }
    // Merge the object into the extended object
    var merge = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                // If property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extendNotiflix(extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    // Loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
        merge(arguments[i]);
    }
    return extended;
};
// Notiflix: Extend off

// Notiflix: Plaintext on
var notiflixPlaintext = function (html) {
    var htmlPool = document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
}
// Notiflix: Plaintext off

// Notiflix: GoogleFont on
var notiflixGoogleFont = function () {
    if (!document.getElementById('NotiflixQuicksand')) {

        // google fonts dns prefetch on
        var dns = '<link id="NotiflixGoogleDNS" rel="dns-prefetch" href="//fonts.googleapis.com" />';
        var dnsRange = document.createRange();
        dnsRange.selectNode(document.head);
        var dnsFragment = dnsRange.createContextualFragment(dns);
        document.head.appendChild(dnsFragment);
        // google fonts dns prefetch off

        // google fonts style on
        var font = '<link id="NotiflixQuicksand" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext" rel="stylesheet" />';
        var fontRange = document.createRange();
        fontRange.selectNode(document.head);
        var fontFragment = fontRange.createContextualFragment(font);
        document.head.appendChild(fontFragment);
        // google fonts style off

    }
}
// Notiflix: GoogleFont off

// Notiflix: Console Error on
var notiflixConsoleError = function (title, message) {
    return console.error('%c ' + title + ' ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + message + '\nVisit documentation page to learn more: https://www.notiflix.com/documentation');
}
// Notiflix: Console Error off

// Notiflix: Main on
var newNotifySettings;
var Notiflix = {

    // Notify on
    Notify: {

        // Init
        Init: function (userNotifyOpt) {
            newNotifySettings = extendNotiflix(true, notifySettings, userNotifyOpt);

            // use GoogleFonts if "Quicksand" on
            if (newNotifySettings.useGoogleFont && newNotifySettings.fontFamily === 'Quicksand') {
                notiflixGoogleFont();
            }
            // use GoogleFonts if "Quicksand" off
        },

        // Merge First Init
        Merge: function (userNotifyExtend) {

            if (newNotifySettings) { // if initialized already
                newNotifySettings = extendNotiflix(true, newNotifySettings, userNotifyExtend);
            } else { // error
                notiflixConsoleError('Notiflix Error', 'You have to initialize the Notify module before call Merge function.');
                return;
            }
        },

        // Display Notification: Success
        Success: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            // check callback
            if (!callback) {
                callback = undefined;
            }

            var theType = newNotifySettings.success;
            NotiflixNotify(message, callback, theType, 'Success');
        },

        // Display Notification: Failure
        Failure: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            // check callback
            if (!callback) {
                callback = undefined;
            }

            var theType = newNotifySettings.failure;
            NotiflixNotify(message, callback, theType, 'Failure');

        },

        // Display Notification: Warning
        Warning: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            // check callback
            if (!callback) {
                callback = undefined;
            }

            var theType = newNotifySettings.warning;
            NotiflixNotify(message, callback, theType, 'Warning');

        },

        // Display Notification: Info
        Info: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            // check callback
            if (!callback) {
                callback = undefined;
            }

            var theType = newNotifySettings.info;
            NotiflixNotify(message, callback, theType, 'Info');

        },

    },
    // Notify off

}
// Notiflix: Main off


// Notiflix: Notify Single on
var notiflixNotifyCount = 0;
var NotiflixNotify = function (message, callback, theType, staticType) {

    if (arguments != undefined && arguments.length === 4) {

        // if no message on
        if (!message) {
            message = 'Notiflix ' + staticType;
        }
        // if no message off

        // if plainText true = HTML tags not allowed on      
        if (newNotifySettings.plainText) {
            message = notiflixPlaintext(message); // message plain text
        }
        // if plainText true = HTML tags not allowed off

        // if plainText false but the message length more than messageMaxLength = HTML tags error on
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            Notiflix.Notify.Merge({ closeButton: true, });
            message = '<b>HTML Tags Error:</b> Your content length is more than "messageMaxLength" option.'; // message html error
        }
        // if plainText false but the message length more than messageMaxLength = HTML tags error off

        // message max length substring on
        if (message.length > newNotifySettings.messageMaxLength) {
            message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
        }
        // message max length substring off

        // font awesome icon style on
        if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
            theType.fontAwesomeIconColor = theType.background;
        }
        // font awesome icon style off

        // notify counter on
        notiflixNotifyCount++;
        // notify counter off

        // if cssAnimaion false -> duration on
        if (!newNotifySettings.cssAnimation) {
            newNotifySettings.cssAnimationDuration = 0;
        }
        // if cssAnimaion false -> duration off

        // notify wrap on
        var docBody = document.body;

        var ntflxNotifyWrap = document.createElement('div');
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

        // wrap position on
        if (newNotifySettings.position === 'right-bottom') {

            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.left = 'auto';

        } else if (newNotifySettings.position === 'left-top') {

            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';

        } else if (newNotifySettings.position === 'left-bottom') {

            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.right = 'auto';

        } else { // 'right-top' or else

            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';
        }
        // wrap position off

        // if background overlay true on
        var notifyOverlay;
        if (newNotifySettings.backOverlay) {
            notifyOverlay = document.createElement('div');
            notifyOverlay.id = newNotifySettings.ID + 'Overlay';
            notifyOverlay.style.width = '100%';
            notifyOverlay.style.height = '100%';
            notifyOverlay.style.position = 'fixed';
            notifyOverlay.style.zIndex = newNotifySettings.zindex;
            notifyOverlay.style.left = 0;
            notifyOverlay.style.top = 0;
            notifyOverlay.style.right = 0;
            notifyOverlay.style.bottom = 0;
            notifyOverlay.style.background = newNotifySettings.backOverlayColor;
            notifyOverlay.className = (newNotifySettings.cssAnimation ? 'with-animation' : '');
            notifyOverlay.style.animationDuration = (newNotifySettings.cssAnimation) ? newNotifySettings.cssAnimationDuration + 'ms' : '';

            if (!document.getElementById(notifyOverlay.id)) {
                docBody.appendChild(notifyOverlay);
            }

        }
        // if background overlay true off

        if (!document.getElementById(ntflxNotifyWrap.id)) {
            docBody.appendChild(ntflxNotifyWrap);
        }
        // notify wrap off


        // notify content on
        var ntflxNotify = document.createElement('div');
        ntflxNotify.id = newNotifySettings.ID + '-' + notiflixNotifyCount;
        ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && !callback ? 'with-close' : '') + ' ' + (callback && typeof callback === 'function' ? 'with-callback' : '');
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;

        // rtl on
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute('dir', 'rtl');
            ntflxNotify.classList.add('rtl-on');
        }
        // rtl off

        // font-family on
        ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '"' + ', sans-serif';
        // font-family off

        // use css animation on
        if (newNotifySettings.cssAnimation) {
            ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
        }
        // use css animation off

        // click to close on
        var closeButtonHTML = '';
        if (newNotifySettings.closeButton && !callback) {
            closeButtonHTML = '<span class="click-to-close"><svg class="clck2cls" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 20 20"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.click2close{fill:' + theType.notiflixIconColor + '}</style></defs><g><path class="click2close" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
        }
        // click to close off

        // use icon on
        if (newNotifySettings.useIcon) {

            if (newNotifySettings.useFontAwesome) { // use font awesome

                ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nmi wfa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'shadow' : 'basic') + '"></i><span class="the-message with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');

            } else { // use notiflix icon

                var svgIcon;

                if (staticType === 'Success') {  // success

                    svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Success{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Success" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';

                } else if (staticType === 'Failure') { // failure

                    svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Failure{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Failure" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';

                } else if (staticType === 'Warning') { // warning

                    svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Warning{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Warning" class="fil0" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';

                } else if (staticType === 'Info') { // info

                    svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Info{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Info" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';

                } else {
                    svgIcon = '';
                }

                ntflxNotify.innerHTML = svgIcon + '<span class="the-message with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');

            }

        } else { // without icon

            ntflxNotify.innerHTML = '<span class="the-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
        }
        // use icon off
        // notify content off


        // notify append or prepend on
        if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first

            var notifyWrap = document.getElementById(ntflxNotifyWrap.id);
            notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);

        } else {

            document.getElementById(ntflxNotifyWrap.id).appendChild(ntflxNotify);

        }

        if (newNotifySettings.useIcon) { // if useIcon, dynamically vertical align the contents

            var messageIcon = document.getElementById(ntflxNotify.id).querySelectorAll('.nmi')[0];
            var messageIconH = 40;

            if (newNotifySettings.useFontAwesome) { // if font awesome

                messageIconH = Math.round(parseInt(messageIcon.offsetHeight));

            } else { // if notiflix SVG

                var SvgBBox = messageIcon.getBBox();
                messageIconH = Math.round(parseInt(SvgBBox.width));

            }

            var messageText = document.getElementById(ntflxNotify.id).querySelectorAll('span')[0];
            var messageTextH = Math.round(messageText.offsetHeight);

            if (messageTextH <= messageIconH) {
                messageText.style.paddingTop = (messageIconH - messageTextH) / 2 + 'px';
                messageText.style.paddingBottom = (messageIconH - messageTextH) / 2 + 'px';
            }

        }
        // notify append or prepend off


        // remove by timeout or click on
        if (document.getElementById(ntflxNotify.id)) {

            // set elements on
            var removeDiv = document.getElementById(ntflxNotify.id);
            var removeWrap = document.getElementById(ntflxNotifyWrap.id);
            var removeOverlay;
            if (newNotifySettings.backOverlay) {
                removeOverlay = document.getElementById(notifyOverlay.id);
            }
            // set elements on

            // timeout vars on
            var timeoutAddClass;
            var timeoutRemove;
            // timeout vars off

            // hide notify elm and hide overlay (if exist) on
            var hideNotifyElementsAndOverlay = function () {

                removeDiv.classList.add('remove');

                if (newNotifySettings.backOverlay && removeWrap.childElementCount <= 0) {
                    removeOverlay.classList.add('remove');
                }

                clearTimeout(timeoutAddClass);
            }
            // hide notify elm and hide overlay (if exist) off

            // remove notify elm and wrapper on
            var removeNotifyElmentsAndWrapper = function () {

                var notifyExist = document.getElementById(ntflxNotify.id);
                if (notifyExist) {
                    removeDiv.parentNode.removeChild(removeDiv);
                }

                if (removeWrap.childElementCount <= 0) { // if childs count === 0 remove wrap
                    removeWrap.parentNode.removeChild(removeWrap);

                    if (newNotifySettings.backOverlay) {
                        removeOverlay.parentNode.removeChild(removeOverlay);
                    }
                }

                clearTimeout(timeoutRemove);
            }
            // remove notify elm and wrapper off

            // timeout if click to close false and callback undefined on
            if (!newNotifySettings.closeButton && !callback) {

                timeoutAddClass = setTimeout(function () {
                    hideNotifyElementsAndOverlay();
                }, newNotifySettings.timeout);

                timeoutRemove = setTimeout(function () {
                    removeNotifyElmentsAndWrapper();
                }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
            }
            // timeout if click to close false and callback undefined off

            // if click to close on            
            if (newNotifySettings.closeButton && !callback) {

                var closeButtonElm = document.getElementById(ntflxNotify.id).querySelectorAll('span.click-to-close')[0];

                closeButtonElm.addEventListener('click', function () {

                    hideNotifyElementsAndOverlay();

                    var clickToCloseTimeout = setTimeout(function () {

                        removeNotifyElmentsAndWrapper();

                        clearTimeout(clickToCloseTimeout);
                    }, newNotifySettings.cssAnimationDuration);

                });

            }
            // if click to close off


            // callback on
            if (callback && typeof callback === 'function') {

                removeDiv.addEventListener('click', function (e) {

                    callback(); // callback

                    hideNotifyElementsAndOverlay();

                    var callbackTimeout = setTimeout(function () {

                        removeNotifyElmentsAndWrapper();

                        clearTimeout(callbackTimeout);
                    }, newNotifySettings.cssAnimationDuration);
                    // remove element off

                });

            }
            // callback off

        }
        // remove by timeout or click off

        // notify - show only the last one on
        if (newNotifySettings.showOnlyTheLastOne && notiflixNotifyCount > 0) {

            var allNotifyElmNotTheLastOne = document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notiflixNotifyCount + '])');

            for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
                var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
                eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
            }

        }
        // notify - show only the last one off

    } else {
        notiflixConsoleError('Notiflix Error', 'Where is the arguments?');
    }

}
// Notiflix: Notify Single off
/* Browser Detection Start */
$(window).on("load",function(e){

    var BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "UnknownBrowser";
            this.OS = this.searchString(this.dataOS) || "UnknownOS";
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
                } else if (dataProp) return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
            {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
            {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
            {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
            {string: navigator.userAgent, subString: "OPR", identity: "Opera"},
            {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
            {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        ],

        dataOS: [
            {string: navigator.platform, subString: "Win", identity: "Windows"},
            {string: navigator.platform, subString: "Mac", identity: "Mac"},
            {string: navigator.userAgent, subString: "iPhone", identity: "iPhone"},
            {string: navigator.platform, subString: "Linux", identity: "Linux"}
        ]
    };

    BrowserDetect.init();

    // Mobile
    var isMobile = {
        Android: function(){return navigator.userAgent.match(/Android/i);},
        BlackBerry: function(){return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function(){return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function(){return navigator.userAgent.match(/IEMobile/i);},
        any: function(){return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    };

    // Browser Detect HTML Add Class
    if (BrowserDetect.browser === "Chrome") {
        $("html").addClass(BrowserDetect.OS + " " + "Chrome" + " " + "Chrome" + BrowserDetect.version);
    } else if (BrowserDetect.browser === "Firefox") {
        $("html").addClass(BrowserDetect.OS + " " + "Firefox" + " " + "Firefox" + BrowserDetect.version);
    } else if (BrowserDetect.browser === "MS Edge") {
        $("html").addClass(BrowserDetect.OS + " " + "Edge" + " " + "Edge" + BrowserDetect.version);
        $("meta[name=viewport]").remove();
        $("head").append("<meta name=\"viewport\" content=\"width=1440\">");
    } else if (BrowserDetect.browser === "Explorer") {
        $("html").addClass(BrowserDetect.OS + " " + "IExplorer" + " " + "IExplorer" + BrowserDetect.version);
        $("meta[name=viewport]").remove();
        $("head").append("<meta name=\"viewport\" content=\"width=1440\">");
    }

});
/* Browser Detection End */
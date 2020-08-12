/*  Copy Text to Clipboard Start */
function copyToClipboard(target) {
    var element = document.getElementById(target);
    var text = element.innerHTML;
    CopyToClipboard(text);
    //alert("Kopyalandı: " + text);
    document.getElementById((target)+'CopyText').innerHTML = "KOPYALANDI";
    document.getElementById((target)+'CopyIcon').style.display = "block";
}

function CopyToClipboard (text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();

        try {
            return document.execCommand("copy");
        } catch (ex) {
            console.warn("Panoya kopyalanamadı.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
/*  Copy Text to Clipboard Start End */

/*  Select Text Start End */
function selectText(target) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(target));
        range.select();

        document.getElementById((target)+'CopyText').innerHTML = "SEÇİLİ HALE GELDİ";

    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(target));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.getElementById((target)+'CopyText').innerHTML = "SEÇİLİ HALE GELDİ";
    }
}
/*  Select Text Start End */
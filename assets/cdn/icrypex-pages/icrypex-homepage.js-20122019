
function cf() {
    // console.log("dropped");
    var error = false;

    document.getElementById('labeltermsOfUseCheck').style.color = "#758ca3";
    document.getElementsByName('firstname')[0].placeholder = "";
    document.getElementsByName('lastname')[0].placeholder = "";
    document.getElementsByName('phone')[0].placeholder = "";
    document.getElementsByName('email')[0].placeholder = "";
    document.getElementsByName('password')[0].placeholder = "";
    document.getElementsByName('confirm')[0].placeholder = "";

    document.getElementById('msgFirstNameId').innerText = "";
    document.getElementById('msgLastNameId').innerText = "";
    document.getElementById('msgPhoneId').innerText = "";
    document.getElementById('msgEmailId').innerText = "";
    document.getElementById('msgPasswordId').innerText = "";
    document.getElementById('msgRePasswordId').innerText = "";

    document.getElementById('inputFirstNameId').style.borderColor = "rgba(117,140,163,0.3)";
    document.getElementById('inputLastNameId').style.borderColor = "rgba(117,140,163,0.3)";
    document.getElementById('inputPhoneId').style.borderColor = "rgba(117,140,163,0.3)";
    document.getElementById('inputEmailId').style.borderColor = "rgba(117,140,163,0.3)";
    document.getElementById('inputPasswordId').style.borderColor = "rgba(117,140,163,0.3)";
    document.getElementById('inputRePasswordId').style.borderColor = "rgba(117,140,163,0.3)";

    document.getElementById('iconFirstNameId').style.display = "none";
    document.getElementById('iconLastNameId').style.display = "none";
    document.getElementById('iconPhoneId').style.display = "none";
    document.getElementById('iconEmailId').style.display = "none";
    document.getElementById('iconPasswordId').style.display = "none";
    document.getElementById('iconRePasswordId').style.display = "none";

    if (document.getElementsByName('firstname')[0].value == "") {
        document.getElementById('msgFirstNameId').innerText = "EN AZ 2 KARAKTER";
        document.getElementById('inputFirstNameId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (document.getElementsByName('lastname')[0].value == "") {
        document.getElementById('msgLastNameId').innerText = "EN AZ 2 KARAKTER";
        document.getElementById('inputLastNameId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (document.getElementsByName('phone')[0].value == "") {
        document.getElementById('msgPhoneId').innerText = "HATALI TELEFON";
        document.getElementById('inputPhoneId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (document.getElementsByName('email')[0].value == "") {
        document.getElementById('msgEmailId').innerText = "HATALI E-POSTA";
        document.getElementById('inputEmailId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (document.getElementsByName('password')[0].value == "") {
        document.getElementById('msgPasswordId').innerText = "EN AZ 8 KARAKTER";
        document.getElementById('inputPasswordId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (document.getElementsByName('confirm')[0].value == "") {
        document.getElementById('msgRePasswordId').innerText = "EN AZ 8 KARAKTER";
        document.getElementById('inputRePasswordId').style.borderColor = "#b82c0d";
        error = true;
    } else if (document.getElementsByName('confirm')[0].value !== document.getElementsByName('password')[0].value) {
        document.getElementById('msgRePasswordId').innerText = "ŞİFRELER UYUŞMUYOR";
        document.getElementById('inputRePasswordId').style.borderColor = "#b82c0d";
        error = true;
    }

    if (!document.getElementById('termsOfUseCheck').checked) {
        document.getElementById('labeltermsOfUseCheck').style.color = "#b82c0d";
        error = true;
    }

    if (!error) {
        return true;
    }
    else {
        return false;
    }
}


document.addEventListener("DOMContentLoaded", function(event) {

    var closeButton = document.getElementsByClassName('notificationclose')[0];
    closeButton.addEventListener("click",function(e){
        window.localStorage.setItem('cookieQuestion', 'yes');
    },false);

    if (window.localStorage.getItem('cookieQuestion') === null) {

        document.getElementsByClassName('cookies-notification')[0].className = "cookies-notification alert alert-dismissible fade show";
    }

    var socket = io.connect("https://price.icrypex.com");
    socket.emit('currencies', 'USDTRY,EURTRY,BTCTRY,ETHTRY,LTCTRY,XRPTRY,BTCUSD,ETHUSD,LTCUSD,XRPUSD,BTCEUR,ETHEUR,LTCEUR,XRPEUR,BTCGBP,ETHGBP,LTCGBP,XRPGBP,BTCJPY,ETHJPY,LTCJPY,XRPJPY');

    socket.on('data', function(msg){
        // console.log(msg);
        var mes = JSON.parse(msg);

        if (mes["status"] == 1) {

            var rows = mes["result"];
            for (var i=0, l = rows.length; i < l; i++) {

                // console.log(rows[i]["name"]);
                // $("#sc-"+rows[i]["symbol"]+" td:eq(1)").text(rows[i]["name"]);
                // $("#sc-"+rows[i]["symbol"]+" td:eq(2)").text(rows[i]["symbol"]);
                if ( parseFloat($(".b-"+rows[i]["symbol"]).text()) <  parseFloat(rows[i]["price"]) ) {
                    $(".b-"+rows[i]["symbol"]).removeClass('sitecolorred').addClass('sitecolorgreen');
                }
                else if (parseFloat($(".b-"+rows[i]["symbol"]).text()) >  parseFloat(rows[i]["price"]) ) {
                    $(".b-"+rows[i]["symbol"]).removeClass('sitecolorgreen').addClass('sitecolorred');
                }


                $(".b-"+rows[i]["symbol"]).text(rows[i]["price"].toFixed(2));

                if (rows[i]["symbol"] == "BTCUSD") {
                    $("#a-BTCUSD").text(rows[i]["price"].toFixed(2));
                }


            }

            //socket.emit('symbols', 'BTC,ETH');

        }

    });
});
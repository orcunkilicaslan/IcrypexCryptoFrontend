
document.addEventListener("DOMContentLoaded", function(event) {

    var socket = io.connect("https://price.icrypex.com");
    socket.emit('currencies', 'USDTRY,EURTRY,BTCTRY,ETHTRY,LTCTRY,XRPTRY');

    socket.on('data', function(msg){
        // console.log(msg);
        var mes = JSON.parse(msg);

        if (mes["status"] == 1) {

            var rows = mes["result"];
            for (var i=0, l = rows.length; i < l; i++) {

                $("#current-"+rows[i]["symbol"]).text(rows[i]["price"].toFixed(2) + 'TRY');

            }

        }

    });

});


new TradingView.MediumWidget(
    {
        "container_id": "btc-widget",
        "symbols": [
            "BITFINEX:BTCTRY|12m"
        ],
        "greyText": "Fiyatları sağlayan",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4bafe9",
        "width": "270px",
        "height": "141px",
        "locale": "tr",
        "chartOnly": true
    }
);
new TradingView.MediumWidget(
    {
        "container_id": "eth-widget",
        "symbols": [
            "BITFINEX:ETHTRY|12m"
        ],
        "greyText": "Fiyatları sağlayan",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4bafe9",
        "width": "270px",
        "height": "141px",
        "locale": "tr",
        "chartOnly": true
    }
);
new TradingView.MediumWidget(
    {
        "container_id": "ltc-widget",
        "symbols": [
            "BITFINEX:LTCTRY|12m"
        ],
        "greyText": "Fiyatları sağlayan",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4bafe9",
        "width": "270px",
        "height": "141px",
        "locale": "tr",
        "chartOnly": true
    }
);
new TradingView.MediumWidget(
    {
        "container_id": "xrp-widget",
        "symbols": [
            "BITFINEX:XRPTRY|12m"
        ],
        "greyText": "Fiyatları sağlayan",
        "gridLineColor": "#e9e9ea",
        "fontColor": "#83888D",
        "underLineColor": "#dbeffb",
        "trendLineColor": "#4bafe9",
        "width": "270px",
        "height": "141px",
        "locale": "tr",
        "chartOnly": true
    }
);
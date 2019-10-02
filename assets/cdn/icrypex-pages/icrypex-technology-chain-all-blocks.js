document.addEventListener("DOMContentLoaded", function(event) {

    eventToListenTo = 'block'
    room = 'inv'

    var socket = io("https://109.169.87.193:3001/");
    socket.on('connect', function() {
        // Join the room.
        socket.emit('subscribe', room);
        $("#latesttx tr").remove();
    })
    socket.on(eventToListenTo, function(data) {
        //console.log("New transaction received: " + data.txid);


        var tr =  '<tr style="display:none;">';
        tr += '<td>'+data.txid+'</td>';
        tr += '<td>'+data.valueOut+' BTC</td>';
        tr += '<td><a class="btn btn-info" href="#" title="" rel="bookmark">DETAYLAR</a></td>';
        tr += '</tr>';


        if ($("#latesttx tr").length < 10) {
            $("#latesttx").prepend(tr);
            $("#latesttx tr:first-child").fadeIn();
        } else {
            $("#latesttx").prepend(tr);
            $("#latesttx tr:first-child").fadeIn();
            $("#latesttx tr:last-child").remove();
        }

    })

});
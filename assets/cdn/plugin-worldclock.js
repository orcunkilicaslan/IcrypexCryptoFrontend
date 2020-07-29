/*  World Clock Zone Start */
function worldClock(zone, region){
    var dst = 0
    var time = new Date()
    var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
    var gmtTime = new Date(gmtMS)

    var hr = gmtTime.getHours() + zone
    var min = gmtTime.getMinutes()
    var sec = gmtTime.getSeconds()

    if (hr >= 24){
        hr = hr-24
    }
    if (hr < 0){
        hr -= -24
    }
    if (hr < 10){
        hr = " " + hr
    }
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }

    if (region == "NAmerica"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(3)
        startDST.setHours(2)
        startDST.setDate(1)
        var dayDST = startDST.getDay()
        if (dayDST != 0){
            startDST.setDate(8-dayDST)
        }
        else{
            startDST.setDate(1)
        }
        endDST.setMonth(9)
        endDST.setHours(1)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(31-dayDST)
        var currentTime = new Date()

        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
        }
    }
    if (region == "Europe"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(2)
        startDST.setHours(1)
        startDST.setDate(31)
        var dayDST = startDST.getDay()
        startDST.setDate(31-dayDST)
        endDST.setMonth(9)
        endDST.setHours(0)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(31-dayDST)
        var currentTime = new Date()
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
        }
    }

    if (dst == 1){
        hr -= -1
        if (hr >= 24){
            hr = hr-24
            // day -= -1
        }
        if (hr < 10){
            hr = " " + hr
        }

        return hr + ":" + min + ":" + sec
    }
    else{
        return hr + ":" + min + ":" + sec
    }
}
/*  World Clock Zone End */

/* Inline Script */

/*
window.onload=worldClockZone;

function worldClockZone(){

    document.getElementById("clock-istanbul").innerHTML = worldClock(2, "Europe")
    document.getElementById("clock-newyork").innerHTML = worldClock(-5, "NAmerica")
    document.getElementById("clock-london").innerHTML = worldClock(0, "Europe")
    document.getElementById("clock-tokyo").innerHTML = worldClock(9, "Tokyo")
    document.getElementById("clock-moscow").innerHTML = worldClock(3, "Europe")

    setTimeout("worldClockZone()", 1000)
}
*/


/* Inline Script */
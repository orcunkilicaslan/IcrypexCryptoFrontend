
'use strict';

/* Notiflix Notify Generator */
Notiflix.Notify.Init( {
        width: '350px',
        useGoogleFont:false,
        fontFamily:"Barlow Condensed",
        fontSize: '15px',
        distance:"20px",
        borderRadius: '2px',
        opacity: 1,
        position:"right-bottom",
        timeout: 5000,
        //closeButton:true,

        success: {
            background: "#70a800",
            textColor: "#ffffff",
            notiflixIconColor: "#ffffff",
        },

        failure: {
            background: "#b82c0d",
            textColor: "#ffffff",
            notiflixIconColor: "#ffffff",
        },

        warning: {
            background: "#ff9900",
            textColor: "#ffffff",
            notiflixIconColor: "#ffffff",
        },

        info: {
            background: "#098cdf",
            textColor: "#ffffff",
            notiflixIconColor: "#ffffff",
        },
    }
);
/* Notiflix Notify Generator */

/* JS-Datapicker */
jQuery(function($) {
    if($('.filter-horizontal').find('input').hasClass('datepickerjs')){

        // Add any id or class to this array that represents an input on the screen.
        const ids = [
            '#filterdatestart',
            '#filterdatefinish'
        ];

        // You only need the 2nd argument to datepicker if you're using options.
        // Feel free to leave it out if you're not using any options.
        const pickers = ids.map(id => datepicker(id, {

            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString();
                input.value = value // => '1/1/2099'
            },

            position: 'br',
            startDay: 1, // Calendar week starts on a Monday.
            customDays: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
            customMonths: ['OCA', 'ŞUB', 'MAR', 'NİS', 'MAY', 'HAZ', 'TEM', 'AĞU', 'EYL', 'EKİ', 'KAS', 'ARA'],
            overlayButton: 'Go!',
            overlayPlaceholder: 'Enter a 4-digit year',

            // Settings.
            //dateSelected: new Date(), // Today is selected.
            maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
            minDate: new Date(2016, 5, 1), // June 1st, 2016.
            startDate: new Date(), // This month.
            showAllDates: true, // Numbers for leading & trailing days outside the current month will show.

            // Disabling things.
            noWeekends: false, // Saturday's and Sunday's will be unselectable.
            disabledDates: [new Date(2050, 0, 1), new Date(2050, 0, 3)], // Specific disabled dates.
            disableMobile: false, // Conditionally disabled on mobile devices.
            disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.

            // ID - be sure to provide a 2nd picker with the same id to create a daterange pair.
            id: 1

        }));

    }
});
/* JS-Datapicker */
document.addEventListener("DOMContentLoaded", function(event) {

    $('#suggest').on("input", function() {

        if ($(this).val().length > 2) {

            $.ajax({
                type: "POST",
                url: "https://www.icrypex.com/autosuggest",
                data: {keyword: $(this).val()},
                cache: false,
                success: function(result){
                    console.log(result);
                    $(".accordion-item").removeClass("active");
                    for (i=0;i<result.length;i++) {
                        $("#"+result[i].category_id+"-"+result[i].id).addClass('active');
                    }
                }
            });
        } else {
            $(".accordion-item").removeClass("active");
        }
    });

    $('#suggest').on("focusout", function() {
        $(".accordion-item").removeClass("active");
    });

});
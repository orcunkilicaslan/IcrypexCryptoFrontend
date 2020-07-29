$(document).on("input","#suggest", function(event) {

    event.preventDefault();

    if ($(this).val().length > 2) {
        $.ajax({
            type: "POST",
            url: "../autosuggest",
            data: {keyword: $(this).val()},
            cache: false,
            success: function(result){
                removeActiveClass();
                for (i=0;i<result.length;i++) {
                    $("#"+result[i].category_id+"-"+result[i].id).addClass('active');
                }
            },
            complete: function() {
                console.log("completed");
            }
        });
    } else {
        removeActiveClass();
    }

});

function removeActiveClass()
{
    var divs = $('.whathow-accordion-stage>div');
    
	for (i=0;i<divs.length;i++) {
		$("#"+divs[i].id).removeClass('active');
	}
}
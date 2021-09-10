
$(document).ready(function()
{
    // $("#card-display").hide();
    $(".card").click(function()
    {
        $("#card-display,#box1,#bar").show();
        // $("#card-deck").hide();
        // $("#main-content").hide();
        // $("#left-slider").hide();
        // $("#ham-button").hide();
    });
    $(".card-display,#home").click(function()
    {
        $("#card-deck").show();
        // $("#content2,#card-display,#box1,#bar").hide();
        $("#main-content").show();
        $("#left-slider").show();
    });
    $("#ham-button").click(function()
    {
        $("#left-slider").toggle(function()
        {
            $("#main-content").animate({left:'-225px'});
            $("#card-deck").animate({right:'100px'});
            // $("#content2,#card-display,#box1,#bar").hide();
        });
    });
});
$(document).ready(function () { // Start Coding Here

    // Sidebar

    $(".menu").click(function () {
        $(".sidebar").slideDown();
    });

    $(".close").click(function () {
        $(".sidebar").slideUp();
    });

    // Smooth Scroll

    $(".ul-slide li a").click(function () {

        var target = $(this).attr("href");

        $("body", "html").animate({
            scrollTop: $(target).offset().top
        }, 1000);

        $(".sidebar").slideUp();

    });

    // Tabs

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#breakfast , #lunch , #dinner").hide();
        $("#" + tab).show();
    });

    $("[tab]").on("click", function () {
        $('[tab]').removeClass('active');
        $(this).addClass('active');
    });

}); // End Code
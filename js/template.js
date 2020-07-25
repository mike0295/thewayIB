jQuery(document).ready(function () {
    $("#header").load("./includes/header.html", function () {
        $(".nav-item-index").addClass("active"); //CHANGE CLASS TO .nav-item-ITEMNAME
    });

    $("#cover-slideshow").load("./includes/cover-slideshow.html");

    $("#cover-single").load("./includes/cover-single.html", function () {
        $("#page-title").append("Title");
        $("#page-subtitle").append("Subtitle");
    });

    $("#footer").load("./includes/footer.html");
});

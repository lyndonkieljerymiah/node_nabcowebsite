(function () {

    var sticker = $("#sticker");
    $(".social-nav").on("click", function () {
        var selected = this.id;
        var isHide = false;
        if (selected === "social-fb") {
            if ($("#fb-container").css("display") === "none") {
                $("#youtube-container").fadeOut("slow", function () {
                    $("#fb-container").fadeIn();
                });
            }
            else {
               isHide = true;
            }
        }
        else if (selected === "social-youtube") {
            if ($("#youtube-container").css("display") === "none") {
                $("#fb-container").fadeOut("slow", function () {
                    $("#youtube-container").fadeIn();
                });
            }
            else {
                isHide = true;
            }
        }
        
        
        if (sticker.hasClass("stk-show") && isHide) {
            sticker.removeClass("stk-show");
            sticker.addClass("stk-hide");
        }
        else if(sticker.hasClass("stk-hide")) {
            sticker.removeClass("stk-hide");
            sticker.addClass("stk-show");
        }
    });

    function move(renum) {
        //tween max animation
        var tween = TweenMax.to(sticker, 2, { left: 1 * renum, ease: none });
    }

    function removeActive() {
        $(".social-nav").removeClass("active");
    }

})();
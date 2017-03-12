var Slider = function() {
    var disappearBox,
    newBox;

    var controlIndex = {
        topObject: null,
        bottomObject: null,
        objectContainers: $(".nb-slider li"),
        next : function() {
            var currentBottom = controlIndex.objectContainers[controlIndex.objectContainers.length - 1];
            var currentTop = controlIndex.objectContainers[0];
            if(currentBottom) {
                 //copy the content
                topObject = $(currentBottom).children().first().clone();
                
                //create li
                var newList = $("<li style='opacity:0;height:0;overflow:hidden'></li>").append(topObject);
                $(".nb-slider ul").prepend(newList);
                $(".nb-slider ul").children().first().animate(
                    {
                        height:'216px',opacity:'1'},
                    {
                        duration : 500,
                        complete: function() {
                            $(currentBottom).remove();
                            //reinitialize
                            controlIndex.objectContainers = $(".nb-slider li");

                        }
                    });
            }
        },
        prev: function() {
            var currentBottom = controlIndex.objectContainers[controlIndex.objectContainers.length - 1];
            var currentTop = controlIndex.objectContainers[0];
            if(currentTop) {
                 //copy the content
                topObject = $(currentTop).children().first().clone();
                 //create li
                var newList = $("<li style='opacity:1'></li>").append(topObject);
                $(".nb-slider ul").append(newList);
                $(currentTop).animate( {
                        height:'0px',opacity:'0'},
                    {
                        duration : 500,
                        complete: function() {
                            $(currentTop).remove();
                            //reinitialize
                            controlIndex.objectContainers = $(".nb-slider li");
                        }
                    });
            }
        }

    };

    var arraySource = [
        {source: "https://www.youtube.com/watch?v=j5jIjI_Ccqc"},
        {source: "https://www.youtube.com/watch?v=DTKQONRv6Ng"},
        {source: "https://www.youtube.com/watch?v=Z1eKNuno7Uw"}
    ];


    this.init = function() {



        //setting up button
        $("#downButton").on("click",next);
        $("#upButton").on("click",prev);
    }

    function next() {
        controlIndex.next();
    }

    function prev() {
        controlIndex.prev();
    }


};
var Sticker = function (obj) {
    var sticker = $("#sticker");
    var previous = null;
    var latest = "#fb-container";
    this.init = init;

    function init() {
        $(".social-icon-bg").on("click", function () {
            var isHide = false;
            var selected = $(this);

            $(".social-icon-bg").removeClass("active");
            selected.addClass("active");
            if (latest !== $(this).data("container")) {
                previous = latest;
                latest = "#" + $(this).data("container");
            }

            if ($(latest).css("display") === "none") {
                $("#social-title").animate({ left: -110 });
                $(previous).fadeOut("slow", function () {
                    $("#social-title").html(selected.data("title"));
                    $("#social-title").animate({ left: 0 });
                    $(latest).fadeIn();
                });
            }
            else {
                isHide = true;
            }

            if (sticker.hasClass("stk-show") && isHide) {
                sticker.removeClass("stk-show");
                sticker.addClass("stk-hide");
            }
            else if (sticker.hasClass("stk-hide")) {
                sticker.removeClass("stk-hide");
                sticker.addClass("stk-show");
            }
        });
    }
};



$(document).ready(function(){
  $('.slider-section-full.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    nav:true,
    dots: false,
    navText: ["<img src='assets/img/pre.png'>", "<img src='assets/img/next-icon.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
});


(function($){
    $(document).ready(function(){
        // Write your JQuery code here
        $(".menu-trigger").on("click", function(){
            $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
        });          

        $(".fa-times,.off-canvas-overlay").on("click", function(){
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
        });

        $(".search-area").on("click", function(){
            $(".search-area input,.search-area a span").addClass("active");
        })          
    });
})(jQuery);
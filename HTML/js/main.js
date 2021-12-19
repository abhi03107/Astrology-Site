$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var navbar = $("#navbar");
        if (scroll > 50) {
          navbar.addClass("white-nav");
        }
        else{
            navbar.removeClass("white-nav")
        }
  })

  $('.owl-photos').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    item: 3,
    responsiveClass: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  })
  document.getElementById("filter-text").innerText="Expand Filters";
});

function expandfilters(){
  $('.filter-split-bottom').toggle();
  var txt=document.getElementById("filter-text");
  if(txt.innerHTML === "Expand Filters"){
    txt.innerHTML="Collapse Filters";
  }
  else
    txt.innerHTML="Expand Filters";
}


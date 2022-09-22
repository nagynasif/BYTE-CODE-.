$(document).ready(function(){
  // hero sloder
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        dots:false,
        items:1,
        navText:['PREV', 'NEXT'],
        smartSpeed:1000,
        responsive:{
          0:{
            nav:false,
          },
          768:{
            nav:true,
          }
        }
    });
      
  });

   // project sloder
  $('#projects-slider').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    nav:false,
  
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1140:{
            items:2
        }
    }
});

   // Reviews Slider sloder
$('#Reviews-Slider').owlCarousel({
  autoplay:true,
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  smartSpeed:1000,
  items:1,
});

  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
  })
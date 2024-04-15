$('.slides-wrp').slick({
    dots: true,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next')
})
 

$('.slides-wrp').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".slide-count").text(i);
});


$('.testi-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: $('.testi-prev'),
    nextArrow: $('.testi-next'),
    responsive: [
        
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
             
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});



$("#tab-item-select").change(function(){
    var selectedIx = $(this).children("option:selected").val();
    $('#'+selectedIx).trigger('click');
});

$('#third-tab, #third-tab-opt').click(function(){
  $('.roadmap-index-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    prevArrow: $('.rd-btn-left'),
    nextArrow: $('.rd-btn-right')
  });
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var URLhash = window.location.hash;
        let topval = 0;

        console.log(URLhash)
        switch (URLhash){
          case "#part1": 
              $("#first-tab").trigger("click");
              $("#tab-item-select").val('first-tab');
              scrollT();
              break;

          case "#part2": 
              $("#second-tab").trigger("click");
              $("#tab-item-select").val('second-tab');
              scrollT();
              break;

          case "#part3": 
              $("#third-tab").trigger("click");
              $("#tab-item-select").val('third-tab');
              scrollT();
              break;

          case "#table-of-contents": 
              $("#fourth-tab").trigger("click");
              $("#tab-item-select").val('fourth-tab');
              scrollT();
              break;

          case "#haskama": 
              $("#fifth-tab").trigger("click");
              $("#tab-item-select").val('fifth-tab');
              scrollT();
              break;

          case "#birth-chart": 
              $("#birth-first-tab").trigger("click");
              $("#tab-item-select").val('birth-first-tab');
              scrollT();
              break;

          case "#learn-about": 
              $("#birth-second-tab").trigger("click");
              $("#tab-item-select").val('birth-second-tab');
              scrollT();
              break;

          case "#session-include": 
              $("#birth-third-tab").trigger("click");
              $("#tab-item-select").val('birth-third-tab');
              scrollT();
              break;

          case "#information": 
              $("#birth-fourth-tab").trigger("click");
              $("#tab-item-select").val('birth-fourth-tab');
              scrollT();
              break;

          case "#note": 
              $("#birth-fifth-tab").trigger("click");
              $("#tab-item-select").val('birth-fifth-tab');
            scrollT();
            break;

          case "#note": 
            scrollT();
            break;
        }

        function scrollT(){
        $( window ).on( "load resize", function() {
            if(window.matchMedia('(max-width: 991px)').matches){
            topval= 80;
            }else{
            topval=0;
            }
        });
        if(window.matchMedia('(max-width: 991px)').matches){
            topval= 80;
        }else{
            topval=0;
        }

        $('html, body').animate({
            scrollTop: $("#guide-tab").offset().top - topval
        }, 300);
        }


document.getElementById("year").innerHTML = new Date().getFullYear();
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


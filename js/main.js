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
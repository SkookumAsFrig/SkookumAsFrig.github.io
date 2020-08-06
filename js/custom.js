$('.btn-social').tooltip();

// // $('.btn.btn-default').click(function(e) {
// //     e.preventDefault();
// //     // $('.video-container').children('iframe').attr('src', '');
// //     alert(e.type)
// //     jQuery('.video-container').children('iframe').attr("src", jQuery('.video-container').children('iframe').attr("src"));
// // });

// function reply_click(clicked_id){
//     // alert('.' + clicked_id)
//     jQuery('.' + clicked_id + '-1').children('iframe').attr("src", jQuery('.' + clicked_id + '-1').children('iframe').attr("src"));
//     jQuery('.' + clicked_id + '-2').children('iframe').attr("src", jQuery('.' + clicked_id + '-2').children('iframe').attr("src"));
// }

// // $('#portfolioModal-3').on('hidden.bs.modal', function() {
// //     var $this = $(this).find('iframe'),
// //       tempSrc = $this.attr('src');
// //     $this.attr('src', "");
// //     $this.attr('src', tempSrc);
// //   });

$('.portfolio-modal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe');
    $this.each(function(index){
        var tempSrc = $(this).attr('src');
        $(this).attr('src', "");
        $(this).attr('src', tempSrc);
    });
});

// slideshow JS below

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " dot_active";

  var $this = $('.slideshow-container').find('iframe');
  $this.each(function(index){
    if (index != (slideIndex-1)){
        var tempSrc = $(this).attr('src');
        $(this).attr('src', "");
        $(this).attr('src', tempSrc);
    }
  });
}

// slideshow 2 JS below

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot2_active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " dot2_active";

  var $this = $('.slideshow-container2').find('iframe');
  $this.each(function(index){
    if (index != (slideIndex-1)){
      var tempSrc = $(this).attr('src');
      $(this).attr('src', "");
      $(this).attr('src', tempSrc);
    }
  });
}

// slideshow 3 JS below

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot3_active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " dot3_active";

  var $this = $('.slideshow-container3').find('iframe');
  $this.each(function(index){
    if (index != (slideIndex-1)){
      var tempSrc = $(this).attr('src');
      $(this).attr('src', "");
      $(this).attr('src', tempSrc);
    }
  });
}
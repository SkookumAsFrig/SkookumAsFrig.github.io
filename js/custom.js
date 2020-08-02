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
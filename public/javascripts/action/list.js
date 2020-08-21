

(function(){
    $('.cptx_video').hide();
    $('#video')[0].pause();
})();


$('.cptx_video_btn').on('click','img',function () {
    $('.cptx_video').show();
    $('#video')[0].play();
});

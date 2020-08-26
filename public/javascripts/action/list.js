

(function(){
    $('.cptx_video').hide();
    $('#video')[0].pause();
})();

let socketVideo = io.connect('http://127.0.0.1:3300');

$('.cptx_video_btn').on('click','img',function () {
    socketVideo.emit('sendVideoIn',{"msg":"cptx_video"});
    socketVideo.emit('sendListHide',{"msg":"cptx_video"});
    $('.cptx_video').show();
    $('#video')[0].play();
});

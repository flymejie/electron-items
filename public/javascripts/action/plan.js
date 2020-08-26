
(function(){
    $('.planlist_show_video').hide();
    $('.planlist_show_img').show();
    $('.plan_video_btn').show();
    document.getElementById('plan_video').pause();
    window.sessionStorage.setItem('planHead',$('.cptx_head_text').html())
})();

let socketVideo = io.connect('http://127.0.0.1:3300');

$('.plan_video_btn').on('click','img',function(){
    socketVideo.emit('sendVideoIn',{"msg":"plan_video_btn"});
    $('.planlist_show_video').show();
    $('.planlist_show_img').hide();
    $('.plan_video_btn').hide();
    document.getElementById('plan_video').play();
});

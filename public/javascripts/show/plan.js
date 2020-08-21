
(function(){
    $('.planlist_show_video').hide();
    $('.planlist_show_img').show();
    $('.plan_video_btn').show();
    document.getElementById('plan_video').pause();
    window.sessionStorage.setItem('planHead',$('.cptx_head_text').html())
})();


$('.plan_video_btn').on('click','img',function(){
    $('.planlist_show_video').show();
    $('.planlist_show_img').hide();
    $('.plan_video_btn').hide();
    document.getElementById('plan_video').play();
});


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


let acceptHttp = window.localStorage.getItem('acceptHttp');

    let acceptSocket = io.connect(acceptHttp);

    acceptSocket.on('connect',function(){
        console.log('connect');
    })

    acceptSocket.on('sendVideoIn',function(data){
        console.log(data);
        if(data.msg == 'plan_video_btn'){
        	$('.planlist_show_video').show();
    		$('.planlist_show_img').hide();
    		$('.plan_video_btn').hide();
    		document.getElementById('plan_video').play();
        }
    })

    acceptSocket.on('disconnect',function(){
        console.log('disconnect');
    })


(function(){
    $('.cptx_video').hide();
    $('#video')[0].pause();
})();


$('.cptx_video_btn').on('click','img',function () {
    $('.cptx_video').show();
    $('#video')[0].play();
});



	let acceptHttp = window.localStorage.getItem('acceptHttp');

    let acceptSocket = io.connect(acceptHttp);

    acceptSocket.on('connect',function(){
        console.log('connect');
    })

    acceptSocket.on('sendVideoIn',function(data){
        console.log(data);
        if(data.msg == 'cptx_video'){
        	$('.cptx_video').show();
    		$('#video')[0].play();
        }
    })

    acceptSocket.on('disconnect',function(){
        console.log('disconnect');
    })
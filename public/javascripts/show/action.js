
(function(){
    window.localStorage.setItem('acceptHttp','192.168.0.163:3300');
})();

var acceptSocket = io.connect('192.168.0.163:3300');

acceptSocket.on('connect',function(){
    console.log('connect');
})

/* 点击事件传参 切换中英文 */
let langNum = 0; /// 0 china  1 english;
let sendSocket = new socketIo();

acceptSocket.on('sendChangeLang',function(data){
    langNum = data.lang;
    console.log('sendChangeLang',data,langNum);
    sendSocket.sendChangeLang(langNum);

})

acceptSocket.on('sendRouterMsg',function(data){
    console.log('sendRouterMsg',data);
    sendSocket.sendChangeLang(langNum);
    //window.location.href = '/users' + data.router;
})

acceptSocket.on('sendClick',function(data){
    console.log('sendClick',data);
    if(data.msg == 'in'){
        $('#vide_in').click();
    }
})


acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})

$('.vide_lan').on('click','img',function () {
    $.each($('.vide_lan').children('img'), (n, m) => {
        $(m).attr('src', $(m).data('src'));
    });
});


$('#vide_in').on('click',function(){
    sendSocket.sendChangeLang(langNum);
    window.location.href = '/users/home';
});


/*$('.vide_list').on('click', 'li img', function () {
    let that = $(this);
    that.attr('src', that.attr('src').slice(0, -4) + '_a.png');
    sendSocket.sendClick(that.data('type'));
    switch (that.data('type')) {
        case 0:
            langNum = 0;
            break;
        case 1:
            langNum = 1;
            break;
        case 'in':
            sendSocket.sendChangeLang(langNum);
            window.location.href = '/users/home';
            break;
    }

});*/








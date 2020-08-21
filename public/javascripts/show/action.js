
(function(){
    window.sessionStorage.setItem('acceptHttp','192.168.0.124:3300');
})();

var acceptSocket = io.connect('192.168.0.124:3300');



/* 点击事件传参 切换中英文 */
let langNum = 0; /// 0 china  1 english;
let sendSocket = new socketIo();

acceptSocket.on('sendChangeLang',function(data){
    langNum = data.lang;
    console.log('sendChangeLang',data,langNum);
})

acceptSocket.on('sendRouterMsg',function(data){
    console.log('sendRouterMsg',data);
    sendSocket.sendChangeLang(langNum);
    window.location.href = '/users' + data.router;
})






$('.vide_lan').on('click','img',function () {
    $.each($('.vide_lan').children('img'), (n, m) => {
        $(m).attr('src', $(m).data('src'));
    });
});


$('.vide_list').on('click', 'li img', function () {
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

});








/* 点击事件传参 切换中英文 */
let langNum = 0; /// 0 china  1 english;
let sendSocket = new socketIo();

$('.vide_lan').on('click','img',function () {
    $.each($('.vide_lan').children('img'), (n, m) => {
        $(m).attr('src', $(m).data('src'));
    });
});

$('.vide_list').on('click', 'li img', function () {
    let that = $(this);
    that.attr('src', that.attr('src').slice(0, -4) + '_a.png');
    // sendSocket.sendClick(that.data('type'));
    switch (that.data('type')) {
        case 0:
            langNum = 0;
            sendSocket.sendChangeLang(langNum);
            break;
        case 1:
            langNum = 1;
            sendSocket.sendChangeLang(langNum);
            break;
        case 'in':
            sendSocket.sendChangeLang(langNum);
            sendSocket.sendClick(that.data('type'));
            // sendSocket.sendRouterMsg('/home');
            window.location.href = '/home';
            break;
    }
});







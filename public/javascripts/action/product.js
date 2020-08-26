let socket = io.connect('http://127.0.0.1:3300');

socket.on('sendIframeSrc', function (data) {
    console.log(4444, data);
    sendIframe(data.Src);
});


///// 一级 点击事件
$('.cate_list').on('click', '.list_item .list_item_title', function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.data('name'));
    $('.item_list_li').css({"background-color": "#4d85b3"});
    $.each($('.list_item_title'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            that.css({
                "background": "url('../images/product/a_a.png')"
            }).siblings('.item_list').slideDown();
            let str = that.data('type') + '&&' + that.data('index');
            let routerStr = '/' + that.data('type') + '/:' + str;

            socket.emit('sendClick',{"msg": that.data('name')});
            socket.emit('sendRouterMsg',{"router": routerStr});
            sendIframe(routerStr);
        } else {
            $(m).css({
                "background": "url('../images/product/a.png')"
            }).siblings('.item_list').slideUp();
        }
    });
});

//// 解决方案点击效果
$('.list_item').on('click', '.plan_list_item', function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.data('name'));
    $.each($('.plan_list_item'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            that.css({
                "background": "url('../images/plan/tbg_a.png')"
            });
            let str = that.data('type') + '&&' + that.data('index');
            let routerStr = '/' + that.data('type') + '/:' + str;
            console.log(routerStr);
            socket.emit('sendPlanClick',{"msg": that.data('name')});
            socket.emit('sendRouterMsg',{"router": routerStr});
            sendIframe(routerStr);
        } else {
            $(m).css({
                "background": "url('../images/plan/tbg.png')"
            }).siblings('.item_list');
        }
    });
});


function sendIframe(str) {
    //// router -->  /type/:list
    console.log(str);
    $('#iframes').attr('src', str);
}


//////////  二级点击效果  传参 product&&0&&0//////
$('.item_list').on('click', ".item_list_li", function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.parent('ol').data('name')+'>'+that.data('name'));
    let str = $(this).parent('ol').data('type') + '&&' + $(this).parent('ol').data('index') + '/:' + $(this).data('index');
    let routerStr = '/' + $(this).parent('ol').data('type') + '/:' + str;
    $('.item_list_li').css({"background-color": "#4d85b3"});
    $.each(that.parent('.item_list').children('.item_list_li'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            $(m).css({"background-color": "#F18D15"});
        }
    });
    socket.emit('sendOneMsg',{"msg": that.parent('ol').data('name')+'>'+that.data('name')});
    socket.emit('sendRouterMsg',{"router": routerStr});
    sendIframe(routerStr);
    // console.log(str,routerStr);
});


/////// end ///////
(function () {
    ////////////////一次性事件
    let btnIndex = parseInt(window.sessionStorage.getItem('btnIndex'));
    $.each($('.list_item_title'), (i, m) => {
        if ($(m).data('index') == btnIndex) {
            $(m).click();
        }
    });
    $.each($('.plan_list_item'), (i, m) => {
        if ($(m).data('index') == btnIndex) {
            $(m).click();
        }
    });

})();


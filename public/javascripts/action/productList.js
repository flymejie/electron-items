var ios = io.connect('http://127.0.0.1:3300');

////////  产品列表点击事件  //////
$('.item_con').on('click', '.item_con_list', function () {
    ///// router  /:kk/:jj/:jj
    let sendRouter = '/product/' + $(this).data('router') + '/:' + $(this).data('index');
    let pTitle = window.sessionStorage.getItem('headerName') + '>' + $(this).children('p').html();
    window.sessionStorage.setItem('headTitle', pTitle);
    console.log(sendRouter);
    ios.emit('sendIframeClick', {"msg": pTitle});
    ios.emit('sendIframeSrc', {"Src": sendRouter});
});

(function () {
    $('.cptx_head').children('i').html(window.sessionStorage.getItem('headerName'));
})();


/// 鼠标滚轮事件
/*$('.list_show_con').on('mousewheel DOMMouseScroll', onMouseScroll);

function onMouseScroll(e) {
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel));
    if (delta < 0) {//向下滚动
        console.log('25  向下滚动');
    } else {//向上滚动
        console.log('27  向上滚动');
    }
}*/


$('#item_con').scroll(function() {
    console.log(21212);
    var scroH = $('#item_con').scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度
    var contentH = $('#item_con').height();  //内容高度
    console.log(viewH,scroH,contentH);
    ios.emit('sendScroll', {"msg": scroH});

});

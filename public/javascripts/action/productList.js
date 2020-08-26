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

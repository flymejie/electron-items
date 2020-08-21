
let ios = new socketIo;

////////  产品列表点击事件  //////
$('.item_con').on('click','.item_con_list',function () {
    ///// router  /:kk/:jj/:jj
    let sendRouter = '/product/'+$(this).data('router') + '/:' + $(this).data('index');
    let pTitle = $('.p').html() + $('.q').html()+'>'+$(this).children('p').html();
    window.sessionStorage.setItem('headTitle',pTitle);
    console.log(sendRouter);
    ios.sendIframeSrc(sendRouter);
});

(function () {
    $('.cptx_head').children('i').html(window.sessionStorage.getItem('headerName'));
})();

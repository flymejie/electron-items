
let ios = new socketIo;

console.log('product list Js');

////////  产品列表点击事件  //////
/*$('.item_con').on('click','.item_con_list',function () {
    ///// router  /:kk/:jj/:jj
    let sendRouter = '/product/'+$(this).data('router') + '/:' + $(this).data('index');
    let pTitle = $('.p').html() + $('.q').html()+'>'+$(this).children('p').html();
    window.sessionStorage.setItem('headTitle',pTitle);
    console.log(sendRouter);
    ios.sendIframeSrc(sendRouter);
});*/

(function () {
    $('.cptx_head').children('i').html(window.sessionStorage.getItem('headerName'));
})();

let acceptHttp = window.localStorage.getItem('acceptHttp');

let acceptSocket = io.connect(acceptHttp);

acceptSocket.on('connect',function(){
    console.log('product list connect');
})

acceptSocket.on('sendIframeClick',function(data){
    console.log(data,data.msg);
    window.sessionStorage.setItem('headTitle', data.msg);
})

acceptSocket.on('sendIframeSrc',function(data){
    console.log('sendIframeSrc',data);
    ios.sendIframeSrc(data.Src);
})

acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})

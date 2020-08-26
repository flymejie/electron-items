
let sendSocket = new socketIo;

$('#proList').on('click','li',function(){
    let that = $(this);
    $.each($('#proList').children('li'),(n,m)=>{
        if(n == that.index()){
            $(m).children('img').attr('src', $(m).children('img').attr('src').slice(0,-4) + '_a.png');
        }else{
            $(m).children('img').attr('src', $(m).children('img').data('src'));
        }
    });
    sendSocket.sendRouterMsg('/'+ that.data('type'));
    sendSocket.sendClick(that.index());
    window.sessionStorage.setItem('btnIndex',that.index());
    window.location.href = '/'+that.data('type');
});


/*function routerFun(str) {
    let sendSocket = new socketIo;
    sendSocket.sendData(str);
    console.log(str);
    sendSocket.sendRouterMsg('/cate');
    window.location.href = '/product';
}*/

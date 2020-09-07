
let sendSocket = new socketIo;

$('#proList').on('click','li',function(){
    let that = $(this);
    sendSocket.sendCateRouter('/'+ that.data('type'));
    sendSocket.sendRouterMsg('/'+ that.data('type'));
    sendSocket.sendClick(that.index());
    window.sessionStorage.setItem('btnIndex',that.data('index'));
    window.location.href = '/'+that.data('type');
});


$('#proList').on('mousedown','li',function(){
    sendSocket.sendImgChange($(this).index());
    let that = $(this);
    $.each($('#proList').children('li'),(n,m)=>{
        if(n == that.index()){
            $(m).children('img').attr('src', $(m).children('img').attr('src').slice(0,-4) + '_a.png');
        }else{
            $(m).children('img').attr('src', $(m).children('img').data('src'));
        }
    });
});


let sendSocket = new socketIo;


$('#proList').on('click', 'li', function () {
    let that = $(this);
    $.each($('#proList').children('li'), (n, m) => {
        if (n == that.index()) {
            $(m).children('img').attr('src', $(m).children('img').attr('src').slice(0, -4) + '_a.png');
        } else {
            $(m).children('img').attr('src', $(m).children('img').data('src'));
        }
    });
    window.sessionStorage.setItem('btnIndex', that.index());
    window.location.href = '/users/' + that.data('type');
    sendSocket.sendRouterMsg('/users/' + that.data('type'));
});


let acceptHttp = window.localStorage.getItem('acceptHttp');

let acceptSocket = io.connect(acceptHttp);

acceptSocket.on('connect',function(){
    console.log('connect');
})

acceptSocket.on('sendClick',function(data){
    console.log(data);
    window.sessionStorage.setItem('btnIndex', data.msg);
})

acceptSocket.on('sendRouterMsg',function(data){
    console.log(data);
   window.location.href = '/users' + data.router;
})

acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})

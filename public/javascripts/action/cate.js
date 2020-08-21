
var routList = ['战术通信','远程广域通信','宽带机动通信','固定通信', '日常通信','陆军战术部队指挥通信解决方案','国防通信骨干网解决方案','全国军用电台网解决方案','军警集群移动通信解决方案','应急通信指挥解决方案'];

let sendSocket = new socketIo;


/*document.getElementById('proList').addEventListener('click', function (e) {
    console.log(e.target.getAttribute('data-name'));
    e.target.setAttribute('src',e.target.getAttribute('data-src'));
    for(let i = 0;i < routList.length;i++){
        if(routList[i] == e.target.getAttribute('data-name')){
            e.target.setAttribute('src',e.target.getAttribute('src').slice(0,-4)+'_a.png');
            window.sessionStorage.setItem('cate',e.target.getAttribute('data-name'));
            // routerFun(e.target.getAttribute('data-type')+'&&'+e.target.getAttribute('data-index'));
            console.log(11,'/' + e.target.getAttribute('data-type'));
            window.location.href = '/'+ e.target.getAttribute('data-type');
        }
    }
});*/

$('#proList').on('click','li',function(){
    let that = $(this);
    $.each($('#proList').children('li'),(n,m)=>{
        if(n == that.index()){
            $(m).children('img').attr('src', $(m).children('img').attr('src').slice(0,-4) + '_a.png');
        }else{
            $(m).children('img').attr('src', $(m).children('img').data('src'));
        }
    });
    window.sessionStorage.setItem('btnIndex',that.index());
    window.location.href = '/'+that.data('type');
    sendSocket.sendRouterMsg('/'+ that.data('type'));
});


/*function routerFun(str) {
    let sendSocket = new socketIo;
    sendSocket.sendData(str);
    console.log(str);
    sendSocket.sendRouterMsg('/cate');
    window.location.href = '/product';
}*/

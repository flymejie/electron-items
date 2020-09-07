window.onload = function () {

    document.getElementById('exit').onclick = function () {
        window.close();
    };

    let goBack = document.getElementById('goBack');

    let Iframe = document.getElementById('iframes');
    // console.log(Iframe);
    if (Iframe) {
        console.log(11);
        goBack.onclick = function () {
            Iframe.contentWindow.history.back();
        }
    } else {
        console.log(22);
        goBack.onclick = function () {
            window.location.href = '/users/home';
        }
    }

let acceptHttp = window.localStorage.getItem('acceptHttp');

let acceptSocket = io.connect(acceptHttp);

acceptSocket.on('connect',function(){
    console.log('connect');
})

acceptSocket.on('sendHeadMsg',function(data){
    console.log('headjs ---- ',data);
    if(data.msg == 'exit'){
        window.close();
    }else if(data.msg == 'iframe'){
        $(goBack).click();
    }else if(data.msg == 'home'){
        window.location.href = '/users/home';
    }

})

acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})




}



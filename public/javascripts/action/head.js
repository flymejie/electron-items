window.onload = function () {

    let socket = io.connect('http://127.0.0.1:3300');


    document.getElementById('exit').onclick = function () {
        socket.emit('sendHeadMsg',{"msg": "exit"});
        window.close();
    };

    document.getElementById('goHome').onclick = function () {
        socket.emit('sendHeadMsg',{"msg": "home"});
        window.location.href = '/home';
    };

    let goBack = document.getElementById('goBack');

    let Iframe = document.getElementById('iframes');
    console.log(Iframe);
    if (Iframe) {
        console.log(11);
        goBack.onclick = function () {
            socket.emit('sendHeadMsg',{"msg": "iframe"});
            Iframe.contentWindow.history.back();
        }
    } else {
        console.log(22);
        goBack.onclick = function () {
            socket.emit('sendHeadMsg',{"msg": "home"});
            window.location.href = '/home';
        }
    }

};



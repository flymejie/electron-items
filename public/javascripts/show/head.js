window.onload = function () {

    document.getElementById('exit').onclick = function () {
        window.close();
    };

    let goBack = document.getElementById('goBack');

    let Iframe = document.getElementById('iframes');
    console.log(Iframe);
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

}






///// 一级 点击事件
$('.cate_list').on('click', '.list_item .list_item_title', function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.data('name'));
    $('.item_list_li').css({"background-color": "#4d85b3"});
    $.each($('.list_item_title'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            that.css({
                "background": "url('../images/product/a_a.png')"
            }).siblings('.item_list').slideDown();
            let str = that.data('type') + '&&' + that.data('index');
            let routerStr = '/' + that.data('type') + '/:' + str;
            sendIframe(routerStr);
        } else {
            $(m).css({
                "background": "url('../images/product/a.png')"
            }).siblings('.item_list').slideUp();
        }
    });
});

//// 解决方案点击效果
$('.list_item').on('click', '.plan_list_item', function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.data('name'));
    $.each($('.plan_list_item'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            that.css({
                "background": "url('../images/plan/tbg_a.png')"
            });
            let str = that.data('type') + '&&' + that.data('index');
            let routerStr = '/' + that.data('type') + '/:' + str;
            console.log(routerStr);
            sendIframe(routerStr);
        } else {
            $(m).css({
                "background": "url('../images/plan/tbg.png')"
            }).siblings('.item_list').slideUp();
        }
    });
});


function sendIframe(str) {
    //// router -->  /type/:list
    console.log(str);
    $('#iframes').attr('src', '/users'+str);
}


//////////  二级点击效果  传参 product&&0&&0//////
$('.item_list').on('click', ".item_list_li", function () {
    let that = $(this);
    window.sessionStorage.setItem('headerName',that.parent('ol').data('name')+'>'+that.data('name'));
    let str = $(this).parent('ol').data('type') + '&&' + $(this).parent('ol').data('index') + '/:' + $(this).data('index');
    let routerStr = '/' + $(this).parent('ol').data('type') + '/:' + str;

    $('.item_list_li').css({"background-color": "#4d85b3"});
    $.each(that.parent('.item_list').children('.item_list_li'), (n, m) => {
        if (that.data('name') == $(m).data('name')) {
            $(m).css({"background-color": "#F18D15"});
        }
    });
    sendIframe(routerStr);
    // console.log(str,routerStr);
});




function changePlanBtn(dataName){
    window.sessionStorage.setItem('headerName',dataName);
    $.each($('.plan_list_item'), (n, m) => {
        if (dataName == $(m).data('name')) {
            $(m).css({
                "background": "url('../images/plan/tbg_a.png')"
            });
        } else {
            $(m).css({
                "background": "url('../images/plan/tbg.png')"
            }).siblings('.item_list');
        }
    });
}

function changeBtn(dataName){
     window.sessionStorage.setItem('headerName',dataName);
     $('.cate_left').show();
    $('.item_list_li').css({"background-color": "#4d85b3"});
    $.each($('.list_item_title'), (n, m) => {
        if (dataName == $(m).data('name')) {
            $(m).css({
                "background": "url('../images/product/a_a.png')"
            }).siblings('.item_list').slideDown();
        } else {
            $(m).css({
                "background": "url('../images/product/a.png')"
            }).siblings('.item_list').slideUp();
        }
    });
}

function changeBtnTwo(dataName){
    window.sessionStorage.setItem('headerName',dataName);
    $('.cate_left').hide();
}

let acceptHttp = window.localStorage.getItem('acceptHttp');

let acceptSocket = io.connect(acceptHttp);

acceptSocket.on('connect',function(){
    console.log('connect');
})

acceptSocket.on('sendClick',function(data){
    console.log(data);
    changeBtn(data.msg);
})


acceptSocket.on('sendIframeSrc', function (data) {
    console.log(4444, data);
    sendIframe(data.Src);
});

acceptSocket.on('sendPlanClick',function(data){
    console.log(data);
    changePlanBtn(data.msg);
})

acceptSocket.on('sendOneMsg',function(data){
    console.log(data);
    changeBtnTwo(data.msg);
})

acceptSocket.on('sendRouterMsg',function(data){
    console.log(data);
    sendIframe(data.router);
})

acceptSocket.on('sendListHide',function(data){
    console.log(data);
    if(data.msg == 'cptx_video'){
    $('.cate_left').hide();
    }
})

acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})




let socket = io.connect('http://127.0.0.1:3300');

socket.on('sendIframeSrc', function (data) {
    console.log(4444, data);
    sendIframe(data.Src);
});



/////// end ///////
(function () {
    ////////////////一次性事件
    let btnIndex = parseInt(window.sessionStorage.getItem('btnIndex'));
    $.each($('.list_item_title'), (i, m) => {
        if ($(m).data('index') == btnIndex) {
            $(m).click();
        }
    });
    $.each($('.plan_list_item'), (i, m) => {
        if ($(m).data('index') == btnIndex) {
            $(m).click();
        }
    });

})();
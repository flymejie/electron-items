
$(function(){
   /* $('.h_list_item').on('click', 'img ', function () {
        window.sessionStorage.setItem('dataType', $(this).data('type'));
        switch ($(this).data('type')) {
            case 'product':
                window.location.href  =  '/users/productCate';
                break;
            case 'plan':
                window.location.href = '/users/planCate';
                break;
        }
    });*/

    $('.product_item').on('click',function(){
        window.location.href  =  '/users/productCate';

    });
    $('.plan_item').on('click',function(){
        window.location.href  =  '/users/planCate';

    });
});


let acceptHttp = window.localStorage.getItem('acceptHttp');

let acceptSocket = io.connect(acceptHttp);

acceptSocket.on('connect',function(){
    console.log('connect');
})

acceptSocket.on('sendClick',function(data){
    if(data.msg == 'product'){
        console.log('product');
        window.sessionStorage.setItem('dataType', 'product');
        $('.product_item').click();
    }else if(data.msg == 'plan'){
        console.log('plan');
        window.sessionStorage.setItem('dataType', 'plan');
        $('.plan_item').click();
    }
})
acceptSocket.on('sendHeadMsg',function(data){
    console.log(data);  
     if(data.msg == 'exit'){
        window.close();
    }
})

acceptSocket.on('disconnect',function(){
    console.log('disconnect');
})




$(function(){
    $('.h_list_item').on('click', 'img ', function () {
        window.sessionStorage.setItem('dataType', $(this).data('type'));
        switch ($(this).data('type')) {
            case 'product':
                window.location.href  =  '/productCate';
                break;
            case 'plan':
                window.location.href = '/planCate';
                break;
        }
    });
});


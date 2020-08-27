let sendSocket = new socketIo();

$(function () {
    $('.h_list_item').on('click', 'img ', function () {
        window.sessionStorage.setItem('dataType', $(this).data('type'));
        sendSocket.sendClick($(this).data('type'));
        switch ($(this).data('type')) {
            case 'product':
                window.location.href = '/productCate';
                break;
            case 'plan':
                window.location.href = '/planCate';
                break;
        }
    });
    $('.h_list_item').on('mousedown', 'img ', function () {
        sendSocket.sendImgChange($(this).data('type'));
        $(this).attr('src',$(this).attr('src').slice(0,-4)+'_a.png');
    })


});




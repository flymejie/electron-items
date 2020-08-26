$(function () {

    let listData = $('.details').data('list');

    temp($('.details').data('list'));
    swiperShow();
    $('.cptx_head_text').html(window.sessionStorage.getItem('headTitle'));

    function temp(listData) {
        console.log(listData);
        let listTemp = '';
        let btnTemp = '';
        $.each(listData.proimgList, (i, m) => {
            listTemp += `<div class="swiper-slide">
                            <img src="${m}" alt="" class="swiper-slide-imgs">
                        </div>`
        });
        /* 判断3d按钮  */

        if (listData.isModel) {
            btnTemp = `<ul class="details_btn_box">
                <li class="swiper-button-next details_btn"></li>
                <li class="swiper-button-prev details_btn"></li>
                <li class="details_btn details_3Dbtn" data-type="3D" data-model='${JSON.stringify(listData.model)}'></li>
            </ul>`
        } else {
            btnTemp = `<ul class="details_btn_box">
                <li class="swiper-button-next details_btn"></li>
                <li class="swiper-button-prev details_btn"></li>
            </ul>`
        }
        let detailTemp = `<div class="swiper-container">
                    <div class="swiper-wrapper">
                             ${listTemp}
                    </div>
            <!-- Add Arrows -->
            ${btnTemp}
        </div>`;
        // console.log(detailTemp);
        $('.details_list').html(detailTemp);
        return false;
    }


    function swiperShow() {
        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            spaceBetween: 30
        });
    }

    var ios = new socketIo;

    $('.details_list').on('click', '.details_btn_box .details_3Dbtn', function () {
        console.log($(this).data('model'));
        window.sessionStorage.setItem('model', JSON.stringify($(this).data('model')));
        ios.sendIframeSrc('/users/productModel');
    })



    let acceptHttp = window.localStorage.getItem('acceptHttp');

    let acceptSocket = io.connect(acceptHttp);

    acceptSocket.on('connect',function(){
        console.log('connect');
    })

    acceptSocket.on('sendModelIn',function(data){
        console.log(data);
        window.sessionStorage.setItem('model', JSON.stringify($('.details_3Dbtn').data('model')));
        ios.sendIframeSrc('/'+data.msg);
    })
    acceptSocket.on('sendBtnDir',function(data){
        console.log('sendBtnDir',data);
        if(data.msg == 'next'){
            $('.swiper-button-next').click();
        }else if(data.msg == 'prev'){
            $('.swiper-button-prev').click();
        }
    })

    acceptSocket.on('disconnect',function(){
        console.log('disconnect');
    })

});

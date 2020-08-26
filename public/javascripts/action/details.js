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

    let ios = io.connect('http://127.0.0.1:3300');

    $('.details_list').on('click', '.details_btn_box .details_3Dbtn', function () {
        window.sessionStorage.setItem('model', JSON.stringify($(this).data('model')));
        ios.emit('sendModelIn',{"msg":"productModel"});
        ios.emit('sendIframeSrc',{"Src":"/productModel"});
    });

    $('.details_list').on('click', '.details_btn_box .swiper-button-next', function () {
        ios.emit('sendBtnDir',{"msg":"next"});
    });
    $('.details_list').on('click', '.details_btn_box .swiper-button-prev', function () {
        ios.emit('sendBtnDir',{"msg":"prev"});
    })

});

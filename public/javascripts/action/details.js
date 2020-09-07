$(function () {

    let listData = $('.details').data('list');

    temp($('.details').data('list'));
    swiperShow();
    $('.cptx_head_text').html(window.sessionStorage.getItem('headTitle'));

    function temp(listData) {
        console.log(listData);
        let listTemp = '',
            btnTemp = '',
            videoBtn = '',
            videoDiv = '';
        $.each(listData.proimgList, (i, m) => {
            listTemp += `<div class="swiper-slide">
                            <img src="${m}" alt="" class="swiper-slide-imgs">
                        </div>`
        });
        /* 判断视频 */
        if (listData.isVideo === true) {
            videoBtn = `<li class="details_btn_video " data-src="${listData.videoSrc}"></li>
`;
            videoDiv = `<div class="details_list_video">
                <video src="${listData.videoSrc}" controls loop autoplay id="details_video"></video>
        </div>`
        }else{
            videoBtn = '';
            videoDiv = '';
        }

        /* 判断3d按钮  */
        if (listData.isModel) {
            btnTemp = `<ul class="details_btn_box">
                <li class="swiper-button-next details_btn"></li>
                <li class="swiper-button-prev details_btn"></li>
                <li class="details_btn details_3Dbtn" data-type="3D" data-model='${JSON.stringify(listData.model)}'></li>
                ${videoBtn}
            </ul>`
        } else {
            btnTemp = `<ul class="details_btn_box">
                <li class="swiper-button-next details_btn"></li>
                <li class="swiper-button-prev details_btn"></li>
                ${videoBtn}
            </ul>`
        }
        let detailTemp = `<div class="swiper-container">
                    <div class="swiper-wrapper">
                             ${listTemp}
                    </div>
            <!-- Add Arrows -->
                ${btnTemp}
                ${videoDiv}
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
        ios.emit('sendModelIn', {"msg": "productModel"});
        ios.emit('sendIframeSrc', {"Src": "/productModel"});
    });

    $('.details_list ').on('click','.details_btn_video',function(){
        $('.details_list_video').show();
        ios.emit('sendVideoShow', {"msg": "videoShow"});
    });

    $('.details_list').on('click', '.details_btn_box .swiper-button-next', function () {
        ios.emit('sendBtnDir', {"msg": "next"});
    });
    $('.details_list').on('click', '.details_btn_box .swiper-button-prev', function () {
        ios.emit('sendBtnDir', {"msg": "prev"});
    })

});

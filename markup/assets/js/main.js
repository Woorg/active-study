import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import 'ion-rangeslider';
// import Dropzone from 'dropzone';

// import 'magnific-popup';
// import slick from 'slick-carousel';
// import "jquery-mask-plugin";
// import bound from 'bounds.js';

(function ($) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #82B93C',
        'color: #fff',
        'display: inline-block',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
        'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
        'line-height: 1.56',
        'text-align: left',
        'font-size: 16px',
        'font-weight: 400'
    ].join(';');

    console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

    $(function() {

        /* 
            Lazyload images
         */


        let lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
            // ... more custom settings?
        });

        if (lazyLoadInstance) {
            lazyLoadInstance.update();
        }


        /* 
            Nav
         */

        const $navTrigger = $('.nav__trigger');

        $navTrigger.on('click', function () {
            $(this).toggleClass('nav__trigger_active');
        });

        $(document).on('click', function(e) {
            if (!$(e.target).closest('.nav__trigger_active').length) {
                $navTrigger.removeClass('nav__trigger_active');
            }
        });


        /*
            Phone Mask
        */

        $('.form__field_phone input').mask("+7(999)999-99-99", {
            placeholder: "Телефон"
        });


        /*
            Licenses carousel
        */


        const $textSlider = $('.text__slider');

        if( $textSlider.length > 0 ) {
            $textSlider.slick({
                mobileFirst: true,
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '60px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 1,
                    }
                }]
            });
        }


        const $newsCarousel = $('.news__carousel');

        if( $newsCarousel.length > 0 ) {
            $newsCarousel.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '60px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 4,
                    }
                }]
            });
        }


        const $promoCarousel = $('.promo__carousel');

        if( $promoCarousel.length > 0 ) {
            $promoCarousel.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '60px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 4,
                    }
                }]
            });
        }



        const $articlesCarousel = $('.articles__carousel');

        if( $articlesCarousel.length > 0 ) {
            $articlesCarousel.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '60px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 3,
                    }
                }]
            });
        }


        const $reviewsCarousel = $('.reviews__carousel');

        if( $reviewsCarousel.length > 0 ) {
            $reviewsCarousel.slick({
                mobileFirst: true,
                dots: true,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '60px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }]
            });
        }


        const $universitiesCarousel = $('.universities__carousel');

        if( $universitiesCarousel.length > 0 ) {
            $universitiesCarousel.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '45px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

                responsive: [{
                    breakpoint: 577,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '90px',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // centerMode: true,
                        // centerPadding: '104px',
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }]
            });
        }


        const $educationSlider = $('.education__slider');

        if( $educationSlider.length > 0 ) {
            $educationSlider.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                fade: true,
                adaptiveHeight: true,
                // centerMode: true,
                // centerPadding: '45px',
                // prevArrow: '<button class="popular-cars__arrow popular-cars__arrow_prev"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                // nextArrow: '<button class="popular-cars__arrow popular-cars__arrow_next"><svg class="popular-cars__arrow-icon" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
               
            });
        }


        /*
            Tabs
        */


        $('.tabs__nav li').click(function(e) {
            var a = $(this),
            parent = a.parents('.tabs'),
            nav = parent.children('.tabs__nav').children('li'),
            box = parent.children('.tabs__content').children('div');

            if (!a.hasClass('active')) {
                a.addClass('active')
                    .siblings().removeClass('active');

                box.eq(a.index()).addClass('active')
                    .siblings().removeClass('active');
            }

            e.preventDefault();

            // $('.form__select').selectize.destroy().selectize();
        });



        /*
            Magnific popup
        */


        // $('.licenses__link').magnificPopup({
        //     type: 'image',
        //     gallery: {
        //         enabled: true
        //     }
        // });


        /*
            Maps
        */

        let myMap;

        // Дождёмся загрузки API и готовности DOM.
        ymaps.ready(init);

        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map").
            myMap = new ymaps.Map('map', {
                // При инициализации карты обязательно нужно указать
                // её центр и коэффициент масштабирования.
                center: [50.446323, 30.515968], // Москва
                zoom: 17
            }, {
                searchControlProvider: ''
            });

            var myPlacemark = new ymaps.Placemark(
                [50.446323, 30.515968], {
                    balloonContent: 'ул. Б. Хмельницкого, 16-22'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'assets/images/general/marker.png',
                    iconImageSize: [14, 19],
                }      
            );
 
            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
            

        }


    function pageWidget(pages) {
        var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
        widgetWrap.prependTo("body");
        for (var i = 0; i < pages.length; i++) {
            $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
        }
        var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
        widgetStilization.prependTo(".widget_wrap");
    }

    pageWidget([
        'index',
        'inner',
        'university'
       
    ]);






    });

})(jQuery);

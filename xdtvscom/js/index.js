$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        loop: true,
        // autoplay: {
        //     delay: 3000,
        // },//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'my-button-disabled',
            hiddenClass: 'my-button-hidden',
        },
    });
    /*scroll事件*/
    clickScroll();

    function clickScroll() {
        var $home = $('#home');
        var $activity = $('#activity');
        var $news = $('#news');
        $home.on('click', function () {
            $('html,body').animate({scrollTop: '0px'}, 800);
        });
        $activity.on('click', function () {
            $('html,body').animate({scrollTop: $('#activityPosition').offset().top - 80}, 800)
        });
        $news.on('click', function () {
            $('html,body').animate({scrollTop: $('#newsPosition').offset().top - 80}, 800)
        })
    }

    /*节目活动跳转*/
    function clickActivity() {
        var $actItem = $('#activityPosition .imgholder');
        var $actTitle = $actItem.siblings('h1');
        var arr = [];
        $actTitle.each(function (index, item) {
            arr[index] = item.innerText
        });
        console.log(arr);
        $actItem.on('click', function (e) {
            e.preventDefault();
            var $actName = $(this).attr('data-id');
            console.log($actName);
            window.location.href = './component/activity.html?name=' + $actName
        })
    }

    clickActivity()

});

$(document).ready(function () {
    $(window).scroll(function () {
        // 100pxスクロールしていたら上に戻るボタンを表示
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });

    $(".back-to-top").click(function () {
        // 400msかけて上に戻る
        $("body,html").animate({ scrollTop: 0 }, 400);
    });
});
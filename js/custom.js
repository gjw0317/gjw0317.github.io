/* 返回随机颜色 */
function randomColor() {
    return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
}

/* 点击生成字符特效 */
var a_idx = 0;
var a_click = 1;
/* 生成的字符内容 */
var a = new Array("乀(ˉεˉ乀)", "         ", "˘ᗜ˘", "(╥╯^╰╥)", "╰(*´︶`*)╯", "✧(◍˃̶ᗜ˂̶◍)✩", "｡◕‿◕｡",
    "(๑ ๑)", "(๑❛ᴗ❛๑)", "w(ﾟДﾟ)w", "Σ( ° △ °|||)︴", "(⊙ˍ⊙)", "(๑ˉ∀ˉ๑)", "<(￣︶￣)>", "╰(*°▽°*)╯", "✿",
    "(,,•́ . •̀,,)", "վ'ᴗ' ի", "(◔◡◔)", "⚝", "₍ᐢ. ֑ .ᐢ₎");
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        /* 点击频率，点击几次就换文字 */
        var frequency = 2;
        if (a_click % frequency === 0) {

            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 9999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": randomColor(),
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
                1500,
                function () {
                    $i.remove();
                });

        }
        a_click++;

    });
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function () {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "/failure.ico");
            $('[rel="shortcut icon"]').attr('href', "/failure.ico");
            document.title = '你已经离开本博客很久了哟~~';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "/favicon.ico");
            $('[rel="shortcut icon"]').attr('href', "/favicon.ico");
            document.title = '你又回来看我了！！！';
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
}
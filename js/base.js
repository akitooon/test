// html側でフォーム送信後thanks.htmlに飛ばす処理用変数
var submitted = false;
var loc = location.pathname;
var currentURL = loc.substring(0, loc.lastIndexOf('/')) + '/';

$(function($){

    // ページトップボタンのスムーススクロール
    $('a[href^="#"]').click(function(){
        var speed = 300;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // 画面下部固定のボタンの表示/非表示切り替え
    $(window).scroll(function() {
        
        var scroll = $(window).scrollTop();
        var showTop = $('.js-FvCvBtn').offset().top + $('.js-FvCvBtn').height();
        var showBottom = $('.js-FormWrap').offset().top - $(window).height();

        $('.js-FixCvBtn').each(function() {
            // 表示領域判定
            if (scroll > showTop && scroll < showBottom) {
                $(this).addClass('show-cv-btn');
            } else {
                $(this).removeClass('show-cv-btn');
            }
        });
    }).trigger('scroll');

    $('form').validate({
        rules: {
            emailAddress: {
                email: true
            },
            'entry.1877548993': {
                required: true
            },
            'entry.1452740838': {
                required: true
            }
        },
        messages: {
            'entry.1877548993': {
                required: "個人情報の取扱いについてへの同意が必要です"
            }
        },
        errorPlacement: function(error, element){
            if (element.is(':radio, :checkbox')) {
              error.appendTo(element.parents('.answer-items'));
            } else {
              error.insertAfter(element);
            }
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "この項目は必須です",
        email: "メールアドレスを正しく入力してください"
    });

    $('input[type="image"]').on('click', function(){
        $('input, textarea').addClass('validation-check');
    });

});
$(function() {  
/*gotop*/
    var $el = $(scrollableElement('html', 'body'));
    var speed = 550;
    var $iconTOP = $('#back-img1');
    $($iconTOP).click(function(event) {
        event.preventDefault();
        $el.stop().animate({ scrollTop: -50 }, speed);
    });
    // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
    function scrollableElement() {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i];
            $el = $(el);
            if ($el.scrollTop() > 0) {

                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }

    $(window).scroll(function() {
        var $all_h=$(window).scrollTop() + $(window).height();
        var $obj_h=$('footer').outerHeight()+10;
        var $foot_top= $('footer').offset().top;
        var $bottom_ad_h=$('.flexd_bottom_ad').outerHeight();

        if ($(window).scrollTop()>50){
            $("#back").show();            
        }else{
            $("#back").hide();            
        }
        if ($(window).width()>767){            
            $(".flexd_bottom_ad").hide();
            if($all_h > $foot_top) {
                //alert("near bottom!");
                $("#back").css({"bottom":$obj_h});
            }else{
                $("#back").css({"bottom":"20px"});
            }
        }else{
            if ($(window).scrollTop()>50){
                $(".flexd_bottom_ad").show();
            }else{
                $(".flexd_bottom_ad").hide();
            }          
            if($all_h > $foot_top) {
                //alert("near bottom!");
                $("#back").css({"bottom":$obj_h+$bottom_ad_h+10,"transition":"0.3s"});
                $(".flexd_bottom_ad").css({"bottom":$obj_h});

            }else{
                $("#back").css({"bottom":$bottom_ad_h+21,"transition":"0.3s"});
                $(".flexd_bottom_ad").css({"bottom":"11px"});
            }
        }

     });

 /*gotop ed*/
//  蓋板關閉
$('.lightbox_ad .xx').click(function(){$('.lightbox_ad').hide();});

var team_tag=$('.team_tag li').outerHeight() * 4;
$('.schedule_notice .nav li').click(function(){
    $('.tag_more').find('.arraw').css({
        transform:'rotate(0deg)',
        transition:'0.5s'
    });
    $('.tag_more').find('p').html('更多球隊');
    $('.team_tag ul').css({height:team_tag+'px',overflow:'hidden',transition:'0.5s'});
    $('.tag_more').removeClass('op');
});

});

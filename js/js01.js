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
        console.log("scrollTop:"+$(window).scrollTop());
        console.log("_height:"+$(window).height());
        console.log("doc_height:"+$(document).height());
        if($(window).scrollTop() + $(window).height() > $(document).height()-100) {
            //alert("near bottom!");
            $("#back").css({"bottom":"112px","transition":"0.5s"});
        }else{
            $("#back").css({"bottom":"20px","transition":"0.5s"});
        }
     });

 /*gotop ed*/

});

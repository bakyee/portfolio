$(function(){
    //스킵메뉴
    $('#skip a').each(function(){
        $(this).on('active focus',function(){
            $('#skip').css({'top':0});
        });
    });
    $('.nav>.gnb li a').each(function(){
        $(this).on('active focus',function(){
            $('#skip').css({'top':'100%'});
        });
    });

    // 패럴랙스
    var wheelDelta=0;
    var browser=0;

    $('.wheel').each(function(index){
        $(this).on('mousewheel DOMMouseScroll',function(event){
            event.preventDefault();

            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
            //console.log(browser);

            if(browser>=0){
                wheelDelta=-event.detail*40;
            }else{
                wheelDelta=event.originalEvent.wheelDelta;
            };

            if(wheelDelta<0){
                if(index<$('.wheel').length-1){
                    $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
                }
                }else{
                    if(index>0){
                        $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);            
                        };
                };
        });
    });
    //menu

    $('#header').click(function(){
        $('html, body').animate({scrollTop:$('#header').offset().top},700);
    });
    $('#aboutMe').click(function(){
        $('html, body').animate({scrollTop:$('#aboutMe').offset().top},700);
    });
    $('#skills').click(function(){
        $('html, body').animate({scrollTop:$('#skills').offset().top},700);
    });
    $('#portfolio').click(function(){
        $('html, body').animate({scrollTop:$('#portfolio').offset().top},700);
    });
    $('#outro').click(function(){
        $('html, body').animate({scrollTop:$('#outro').offset().top},700);
    });
    //메뉴 클릭시 이동
    var menu_btn=$('.gnb li');
    var scrollBtn=$('.nav_scroll ul li');
    menu_btn.click(moveToTop);
    scrollBtn.click(moveToTop);

    function moveToTop(){
        var tg=$(this),
            index=tg.index(),
            section=$('.wheel').eq(index);
        var top=section.offset().top;
        $('html, body').stop().animate({scrollTop:top},500);
        return false;
        };
    
    //고정메뉴
    var $window=$(window),
        $menu=$('.nav'),
        $scroll_menu=$menu.contents().clone(),
        $scroll_menu_container=$('<nav class="nav_scroll"></nav>'),
        $outHeight=$menu.offset().top + $menu.outerHeight();
        //console.log($outHeight);
    $scroll_menu_container.append($scroll_menu);
    $scroll_menu_container.appendTo('body');

    $window.scroll(function(){
       if($(this).scrollTop()>=$outHeight){
        $scroll_menu_container.addClass('visible');
       }else{
        $scroll_menu_container.removeClass('visible');
        
       }; 
    });
    //햄버거메뉴
    $('.m_navBtn').toggle(function(){
        $(this).addClass('toggle');
        $('.btn_line1').addClass('toggle');
        $('.btn_line2').addClass('toggle');
        $('.btn_line3').addClass('toggle');
        $(this).siblings($('.gnb')).stop().slideDown(500);
    },function(){
        $('.m_navBtn').removeClass('toggle');
        $('.btn_line1').removeClass('toggle');
        $('.btn_line2').removeClass('toggle');
        $('.btn_line3').removeClass('toggle');
        $(this).siblings($('.gnb')).stop().slideUp(500);
    });
    $('ul.gnb li').each(function(){
        $(this).on('click',function(){             
            $('.m_navBtn').removeClass('toggle');
            $('.btn_line1').removeClass('toggle');
            $('.btn_line2').removeClass('toggle');
            $('.btn_line3').removeClass('toggle');
            $('.gnb').stop().slideUp(500);
        });
    });
    //움직이는 배경
    $('#header').on('mousemove',function(e){
        var x=e.pageX;
        var y=e.pageY;

        $('.obj1').css({'top':(y/30),'left':(x/20)});
        $('.obj2').css({'top':-(y/10),'left':(x/10)});
        $('.obj3').css({'bottom':(y/5),'left':(x/1)});
        $('.obj4').css({'top':(y/5),'left':(x/0)});
        
    });
    //위로가기버튼
    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop:$('#header').offset().top},700);
    });

    //skills 라인 애니메이션
    $(window).scroll(function(){
        var scroll_top=$(window).scrollTop(),
            skills=$('#skills').offset();
        var progress=$('.graph li');
        progress.each(function(){
        var progressBar=$(this).find('.bar');
        var progressNum=progressBar.attr('data-num');
        progressBar.stop().animate({
            width:progressNum+'%'
        },1200);
    });
    });
});

/*포트폴리오*/
window.onload=function(){
    document.querySelector('button.naverMovie').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://www.eunjinjeong.kr/naverMovie/index.html";
    })
    document.querySelector('button.sch').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://www.eunjinjeong.kr/sch/index.html";
    })
    document.querySelector('button.yamaha').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://www.eunjinjeong.kr/yamaha/index.html";
    })
    document.querySelector('button.fresca').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://mrsquirrel.dothome.co.kr/pasta_gnu/";
    })
    document.querySelector('button.hotel').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://www.eunjinjeong.kr/hotel/index.html";
    })
    document.querySelector('button.sch').addEventListener('click',function(e){
        e.preventDefault();
        location.href="http://www.eunjinjeong.kr/sch/index.html";
    })
};

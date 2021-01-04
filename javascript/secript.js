$(document).ready(function(){

    //show navbar when you click on button
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    //when scoll body stickey navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc>50){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }

    })

    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');

        var cssfliter = $(this).attr('id');

        if(cssfliter==='all'){
            $('.images > div').fadeIn();
        }
        else{
            $('.images > div').fadeOut();
            $('.images ').contents().filter('.'+cssfliter).fadeIn();
        }
    })
    
    $('.list a').click(function(){
        $('body,html').animate({
            scrollTop:$($(this).attr('href')).offset().top-100
        });
});
});

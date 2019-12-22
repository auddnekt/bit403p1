$(document).ready(function(){
    /*컨텐츠박스*/
    
    /*클릭시 박스 정렬*/
    $('#array1').click(function(){
        $('.box_m').fadeOut('500');
        $('#box4').insertAfter('#box1');
        $('#box7').insertAfter('#box4');
        $('#box5').insertAfter('#box2');
        $('#box8').insertAfter('#box5');
        $('.box_m').fadeIn('500');
    });
    $('#array2').click(function(){
        $('.box_m').fadeOut('500');
        $('#box1').insertAfter('#box3');
        $('#box5').insertAfter('#box2');
        $('#box8').insertAfter('#box5');
        $('#box6').insertAfter('#box3');
        $('#box9').insertAfter('#box6');
        $('.box_m').fadeIn('500');
    });
    $('#array3').click(function(){
        $('.box_m').fadeOut('500');
        $('#box1').insertAfter('#box3');
        $('#box2').insertAfter('#box7');
        $('#box6').insertAfter('#box3');
        $('#box9').insertAfter('#box6');
        $('#box5').insertAfter('#box2');
        $('.box_m').fadeIn('500');
    });

    /*---------+---------------+----------*/

    /*아코디언*/
    $('#acc div').css({
        'padding':'20px 0px'
        ,'width':'80%'
        ,'display':'none'
    });

    $('h2').click(function(){
        let $this=$(this);
        $(this).css('background-color','rgb(255,255,255,0.0)');
        $(this).next('div').slideUp();
        if($(this).next('div').is(':visible')==false){
            $('h2').css('background-color','rgb(255,255,255,0.0)')
                .next()
                .hide();
            $this.css('background-color','rgb(150,44,211,0.4)');
            $this.next('div').slideDown();
        }
    });
   /* --------+---------------+--------*/


    /*  슬라이드바   */
    var floatPosition=parseInt($('#slidebar').css('top'));
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        var newPosition=scrollTop+floatPosition+'px';
    $('#slidebar').stop().animate({
        'top':newPosition},500);
    }).scroll();


    /*--------+----------+---------*/

    



});

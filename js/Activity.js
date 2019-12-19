$(document).ready(function(){
    /*컨텐츠박스*/
    $('.box_m>')


    /*---------+---------------+----------*/

    /*아코디언*/
    $('h2+div').css({
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
            $this.css('background-color','violet');
            $this.next('div').slideDown();
        }
    });
   /* --------+---------------+--------*/

    /*var floatPosition=parseInt($('#acc').css('top'));
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        var newPosition=scrollTop+floatPosition+'px';
    $('#acc').stop().animate({
        'top':newPosition},500);
    }).scroll();*/


    /*slide효과*/
    var footer_floatPosition=parseInt($('footer').css('top'));
    $(window).scroll(function(){
        var footer_scrollTop=$(window).scrollTop();
        var footer_newPosition=footer_scrollTop
                                +footer_floatPosition+'px';
    $('footer').stop().animate({
        'top':footer_newPosition},500);
    }).scroll();
    /*--------+----------+---------*/

   /* $(window).scroll( function(){
        $('#acc').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
*/


});

$(document).ready(function(){
    $('h2+div').css({
        'padding':'20px 0px'
        ,'width':'80%'
        ,'display':'none'
    });

    $('h2').click(function(){
        let $this=$(this);
        $(this).next('div').slideUp();
        if($(this).next('div').is(':visible')==false){
            $('h2').css('background-color','white')
                .next()
                .hide();
            $this.css('background-color','violet');
            $this.next('div').slideDown();
        }
    });

/*    var floatPosition=parseInt($('#background').css('top'));
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        var newPosition=scrollTop+floatPosition+'px';
    $('#background').stop().animate({
        'top':newPosition},600);
    }).scroll();*/

    var footer_floatPosition=parseInt($('footer').css('top'));
    $(window).scroll(function(){
        var footer_scrollTop=$(window).scrollTop();
        var footer_newPosition=footer_scrollTop
                                +footer_floatPosition+'px';
    $('footer').stop().animate({
        'top':footer_newPosition},600);
    }).scroll();
});

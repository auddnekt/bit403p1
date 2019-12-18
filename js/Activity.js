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
})

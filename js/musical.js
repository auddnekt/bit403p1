/*$('.conbox').click(function(){
   let th=$(this);
    th.next('.acc').slideUp();

    if(th.next('.acc').is(':visible')==false){
       $('.conbox').next()
                   .hide();
    th.css("opacity", "0.5");
    th.next('acc').slideDown();
       }
});*/

/*$(".accordion").each(function(){
    var dl=$(this);
    var adt=dl.find("dt");
    var add=dl.find("dd");
    add.hide();
    adt.css("cursor", "pointer");

    adt.click(function(){
        var dt=$(this);
        var dd=dt.next();
        add.hide();
        dd.show();
        adt.css("cursor", "pointer");
        dt.css("cursor", "default");
    });
});*/
$('.contents').on('click', function(){
   $('.acc').slideUp();
});

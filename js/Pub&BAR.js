$(document).ready(function(){

       if($(window).width()<640){
           $('#art1').hide();
           $('#art2').show();
       }else{
           $('#art2').hide();
           $('#art1').show();
       }
       $(window).resize(function(){
           if($(window).width()<640){
                $('#M1').hide();
           }else{
               $('#M1').show();
               $('#M4').hide();
               $('#M5').hide();
               $('#M6').hide();
               }
       });



    $('#art1 .no1').on('click', function(){
        $('.btn1').show();
        $('.btn2').hide();
        $('.btn3').hide();
        $('#mainSlider>#sel1').show();
        $('#mainSlider>#sel2').hide();
        $('#mainSlider>#sel3').hide();
        $('#poster1').show();
        $('#poster2').hide();
        $('#poster3').hide();
    });
    $('#art1 .no2').on('click', function(){
        $('.btn2').show();
        $('.btn1').hide();
        $('.btn3').hide();
        $('#mainSlider>#sel2').show();
        $('#mainSlider>#sel1').hide();
        $('#mainSlider>#sel3').hide();
        $('#poster2').show();
        $('#poster1').hide();
        $('#poster3').hide();


    });
    $('#art1 .no3').on('click', function(){
        $('.btn3').show();
        $('.btn1').hide();
        $('.btn2').hide();
        $('#mainSlider>#sel3').show();
        $('#mainSlider>#sel2').hide();
        $('#mainSlider>#sel1').hide();
        $('#poster3').show();
        $('#poster1').hide();
        $('#poster2').hide();
    });


     $('#art2 .no1').on('click', function(){
        $('#M4').show();
        $('#M5').hide();
        $('#M6').hide();
        $('#poster1').show();
        $('#poster2').hide();
        $('#poster3').hide();
    });
    $('#art2 .no2').on('click', function(){
        $('#M5').show();
        $('#M4').hide();
        $('#M6').hide();
        $('#poster2').show();
        $('#poster1').hide();
        $('#poster3').hide();
    });
    $('#art2 .no3').on('click', function(){
        $('#M6').show();
        $('#M4').hide();
        $('#M5').hide();
        $('#poster3').show();
        $('#poster1').hide();
        $('#poster2').hide();
    });

   $(window).resize(function(){
       if($(window).width()<640){
           $('#art1').hide();
           $('#art2').show();
       }else{
           $('#art2').hide();
           $('#art1').show();
       }
   });

});

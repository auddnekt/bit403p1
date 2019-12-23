        $(document).ready(function(){


        if ($(window).width() < 640) {
            $('#sec').find('div').show();

        } else {
            $('#sec').find('div').hide();

        }
        $(window).resize(function () {
            if ($(window).width() < 640) {
                $('#sec').find('div').show();
            } else {
                $('#sec').find('div').hide();
            }
        });


            $(function() {
                $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).fadeIn('linear');
            });

            $('.km').on('click', function(){
                $('article').hide();
                let a = $(this).siblings('a')
                a.css('color','black');
                $(this).css('color','red');
                let k = $('article').map(function(index, item){
                    return $('article').filter('.kor');
                });
                $(k).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.cm').on('click', function(){
                $('article').hide();
                let a = $(this).siblings('a')
                a.css('color','black');
                $(this).css('color','red');
                let c = $('article').map(function(index, item){
                    return $('article').filter('.cha');
                });
                $(c).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.wm').on('click', function(){
                $('article').hide();
                let a = $(this).siblings('a')
                a.css('color','black');
                $(this).css('color','red');
                let w = $('article').map(function(index, item){
                    return $('article').filter('.wes');
                });
                $(w).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.am').on('click', function(){
                $("article").hide();
                let a = $(this).siblings('a')
                a.css('color','black');
                $(this).css('color','red');
                let img = $("article").get().sort(function(){
                return Math.round(Math.random())-0.4;
                }).slice(0,12);
                $(img).fadeIn();
                });

            $('article').mouseover(function(){
                $(this).find('.img1').fadeOut();
                $(this).find('.img2').fadeIn();
                $(this).find('div').fadeIn();
            });

            $('article').mouseleave(function(){
                $(this).find('.img2').fadeOut();
                $(this).find('.img1').fadeIn();
                $(this).find('div').fadeOut();
            });

/*            $('article').each(function(index){
              $(this).on({
                 mouseover : function(){
                     $(this).css('border','18px solid transparent');
                     $(this).children('div').fadeIn(300);
                 }
                ,mouseleave : function(){
                    $(this).css('border','0');
                    $(this).children('div').css('display','none');
                }
              });
          });*/


        });

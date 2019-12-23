        $(document).ready(function(){
            $(function() {
                $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).fadeIn('linear');
            });

            $('.km').on('click', function(){
                $('article').hide();
                let k = $('article').map(function(index, item){
                    return $('article').filter('.kor');
                });
                $(k).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.cm').on('click', function(){
                $('article').hide();
                let c = $('article').map(function(index, item){
                    return $('article').filter('.cha');
                });
                $(c).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.wm').on('click', function(){
                $('article').hide();
                let w = $('article').map(function(index, item){
                    return $('article').filter('.wes');
                });
                $(w).each(function(index, item){
                    $(this).fadeIn();
                });
            });
            $('.am').on('click', function(){
                    $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).fadeIn();
                });

            $('article').mouseover(function(){
                $(this).find('div').fadeToggle();
            });

            $('article').mouseleave(function(){
                $(this).find('div').fadeOut();
            });



        });

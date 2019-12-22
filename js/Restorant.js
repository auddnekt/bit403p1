        $(document).ready(function(){
            $(function() {
                $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).slideToggle();
            });

            $('.km').on('click', function(){
                $('article').hide();
                let k = $('article').map(function(index, item){
                    return $('article').filter('.kor');
                });
                $(k).each(function(index, item){
                    $(this).show();
                });
            });
            $('.cm').on('click', function(){
                $('article').hide();
                let c = $('article').map(function(index, item){
                    return $('article').filter('.cha');
                });
                $(c).each(function(index, item){
                    $(this).show();
                });
            });
            $('.wm').on('click', function(){
                $('article').hide();
                let w = $('article').map(function(index, item){
                    return $('article').filter('.wes');
                });
                $(w).each(function(index, item){
                    $(this).show();
                });
            });
            $('.am').on('click', function(){
                    $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).show();
                });

            $('article').click(function(){
                $(this).find('div').slideToggle();
            });
/*
            $('article').mouseleave(function(){
                $(this).find('div').hide();
            });
*/


        });

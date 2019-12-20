        $(document).ready(function(){




            $('.km').on('click', function(){
                    $('.kor').show().css('display','inline-block');
                    $('.cha').hide();
                    $('.wes').hide();
                });
            $('.cm').on('click', function(){
                    $('.kor').hide();
                    $('.cha').show().css('display','inline-block');
                    $('.wes').hide();
                });
            $('.wm').on('click', function(){
                    $('.kor').hide();
                    $('.cha').hide();
                    $('.wes').show().css('display','inline-block');
                });
            $('.am').on('click', function(){
                    $("article").hide();
                    let img = $("article").get().sort(function(){
                    return Math.round(Math.random())-0.4;
                    }).slice(0,12);
                $(img).show();
                });
        });


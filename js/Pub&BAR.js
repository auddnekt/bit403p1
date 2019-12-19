$(document).ready(function(){

       if($(window).width()<640){
           $('#art1').hide();
           $('#art2').show();
       }else{
           $('#art2').hide();
           $('#art1').show();
       }

	let visual = $('.brandVisual > ul > li');
	let button = $('.buttonList > li');

	let current = 0;
	let setIntervalId ;

	button.on({click:function(){
				let tg = $(this);
				let i = tg.index();

				button.removeClass('on');
				tg.addClass('on');
				move(i);
				}
			});

	$('#wrap').on({
					mouseover:function(){
						clearInterval(setIntervalId);
				    },
					mouseout:function(){
							timer();
					}
			   });

	timer();

	function timer(){
		setIntervalId = setInterval(function(){
			let n = current + 1 ;
			if ( n == visual.size()){
					n = 0;
			}
			button.eq(n).trigger('click');
		}, 100000);

	}

	function move(i){
		if(current == i) return ;

		let currentEl = visual.eq(current);
		let nextEl = visual.eq(i);

		currentEl.css({left:0}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});
		current = i ;
	}
    $('#art1 .no1').on('click', function(){
        $('#M1').show();
        $('#M2').hide();
        $('#M3').hide();
    });
    $('#art1 .no2').on('click', function(){
        $('#M2').show();
        $('#M1').hide();
        $('#M3').hide();
    });
    $('#art1 .no3').on('click', function(){
        $('#M3').show();
        $('#M2').hide();
        $('#M1').hide();
    });


     $('#art2 .no1').on('click', function(){
        $('#M4').show();
        $('#M5').hide();
        $('#M6').hide();
    });
    $('#art2 .no2').on('click', function(){
        $('#M5').show();
        $('#M4').hide();
        $('#M6').hide();
    });
    $('#art2 .no3').on('click', function(){
        $('#M6').show();
        $('#M4').hide();
        $('#M5').hide();
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

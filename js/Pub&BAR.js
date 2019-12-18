$(document).ready(function(){
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
    $('.no1').on('click', function(){
        $('#M1').show();
        $('#M2').hide();
        $('#M3').hide();
    });
    $('.no2').on('click', function(){
        $('#M2').show();
        $('#M1').hide();
        $('#M3').hide();
    });
    $('.no3').on('click', function(){
        $('#M3').show();
        $('#M2').hide();
        $('#M1').hide();
    });

});

/*
Выдвижная панель
*/
$(document).ready(function(){
	'use strict';
	$(".btn-slide").click(function(){
		$('#panel').slideToggle('slow');
		$(this).toggleClass('active');
	});
});
/*
Красивые исчезновения
*/
$(document).ready(function(){
	$('.pane .delete').click(function(){
		$(this).parents('.pane').animate({ opacity: 'hide' }, 'slow');
	});
});
/*
Связанная анимация
*/
$(document).ready(function(){
	$('.run').click(function(){

		$('#box').animate({opacity: '0.1', left: '+=400'} , 1200);
		$('#box').animate({opacity: '0.4' , top: '+=160' , height: '20' , width: '20'} , 'slow');
		$('#box').animate({opacity: '1' , left: '0' , height: '100' , width: '100' } , 'slow');
		$('#box').animate({top: '0' , } , 'slow');
		$('#box').slideUp();
		$('#box').slideDown('slow');
	});
});
/*
	ВКЛАДКИ
*/
/*ПОЕХАЛИ, как только DOM будет готов*/
$(document).ready(function(){
	/*на блоке, содержащем корешки вкладок слушаю события */
	$('.b-box-door-vkladki').click(function(event){
		/*идентефицируем конкретный корешок вкладки (или что то другое :),
		если мышью кликают где попало) на котором произошло	событие
		и фиксируме его в переменную*/
		var elem = $(event.target);
		/*фиксируем в перемнных четыре вещи: два корешка и
		 два текстовых блока, соответствующие этим корешкам*/
		var winVkladOne = $('.b-door-vkladka_one'),
				winVkladTwo = $('.b-door-vkladka_two'),
				winVkladTextOne = $('.b-box-window_one'),
				winVkladTextTwo = $('.b-box-window_two');
		/* теперь надо сравнивать идентифицированный кликнутый элемент
		 с имеющимися корешками и принимать соответствующие действия по
		 изменению внешнего вида*/
		/*Если был нажат корешок первой вкладки*/
		if(elem.hasClass('b-door-vkladka_one')) {
			/*Замена корешка первой вкладки на активный оранжевый цвет*/
			replaceClass(winVkladOne, 'vkladka_notactive_gray', 'vkladka_active_orange');
			/*Замена корешка второй вкладки на неактивный серый цвет*/
			replaceClass(winVkladTwo, 'vkladka_active_orange' , 'vkladka_notactive_gray');
			/*Замена класса первой вкладки на активный, видымый блок*/
			replaceClass(winVkladTextOne , 'notactive_vkladka' , 'active_vkladka' );
			/*Замена класса второй вкладки на неактивный, невидымый блок*/
			replaceClass(winVkladTextTwo , 'active_vkladka' , 'notactive_vkladka');

		}
		/*Если был нажат корешок второй вкладки, оставляю как было сначала,
		 для понимания эволюции кода */
		else if (elem.hasClass('b-door-vkladka_two')) {
			winVkladTwo.addClass('vkladka_active_orange').removeClass('vkladka_notactive_gray');
			winVkladOne.addClass('vkladka_notactive_gray').removeClass('vkladka_active_orange');
			winVkladTextTwo.addClass('active_vkladka').removeClass('notactive_vkladka');
			winVkladTextOne.addClass('notactive_vkladka').removeClass('active_vkladka');
		}
	});
	/*
	Функция, заменяющая в неком элементе DOM (под пременной elemOper)
	один класс (classlast) на другой (classNew)
	*/
	function replaceClass(elemOper, classlast , classNew) {
		elemOper.addClass(classNew).removeClass(classlast);
	}
});

/*
Soli Deo Gloria
*/
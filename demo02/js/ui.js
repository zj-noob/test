$.fn.UiSearh = function() {
	var ui = $(this);
	$('.ui-search-selected', ui).on('click', function() {
		$('.ui-search-selected-list').show();
		return false;
	});
	$('.ui-search-selected-list a').on('click', function() {
		$('.ui-search-selected').text($(this).text())
		$('.ui-search-selected-list').hide();
		return false;
	});
	$('body').on('click',function(){
		$('.ui-search-selected-list').hide();
	});
}

$.fn.UiTab = function(header,content,focus_prefix){
		var ui = $(this);
		var tabs = $(header,ui);
		var cons = $(content,ui);
		var focus_prefix = focus_prefix || '';
		tabs.on('click',function(){
			var index = $(this).index(); 
			tabs.removeClass(focus_prefix+'item_focus').eq(index).addClass(focus_prefix+'item_focus');
			cons.hide().eq(index).show();
			return false;
		});
}

$.fn.UiBackTOP= function(){
	var ui = $(this);
	var el =$('<a class="ui-backTop" href="#0"></a>');
	var windowHeight = $(window).height();
	console.log(windowHeight);
	ui.append(el);
	$(window).on('scroll',function(){
		var top = $('body').scrollTop();
	

		if($(window).scrollTop()>100){
			el.show();
		}else {
			el.hide();
		}
	});
	el.on('click',function(){
		$(window).scrollTop(0);
	});
	return false;
}

$(function (){
	$('.ui-search').UiSearh();
	$('.content-tab').UiTab('.caption > .item','.block > .item');
	$('.content-tab .block .item').UiTab('.block-caption > a','.block-content >.block-warp','block-caption-');
	$('body').UiBackTOP();
});
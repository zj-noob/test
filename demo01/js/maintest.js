/*
* @Author: cococ
* @Date:   2017-07-15 13:54:07
* @Last Modified by:   cococ
* @Last Modified time: 2017-07-24 14:07:36
*/

'use strict';
$(function(){
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 768;
		$('#main_id > .carousel-inner > .item').each(function(i,item) {
		var $item = $(item);
		var imgSrc = $item.data(isSmallScreen?'image-xs':'image-lg');
		$item.css('backgroundImage','url("' + imgSrc + '")');
		if (isSmallScreen) {
			$item.html('<img src="'+imgSrc+'" alt=".." />')
		}else {
			$item.empty();
		}
	  });
	}

	$(window).on('resize',resize).trigger('resize');
	$('[data-toggle="tooltip"]').tooltip();
});
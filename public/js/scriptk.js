var $ = jQuery.noConflict();

$(document).ready(function() {
	var totalItems = $(".scrollable .list_items .item").size();
	$(".scrollable").scrollable({circular: true}).autoscroll({ autoplay: true,interval:4000});
});
// Scroll
$.fn.listItemScroll = function(param) {
	var el = $(this);
	var totalItems = el.find(param['item']).size();
	if(totalItems <= param['number']){
		el.parent().find(".prev").css("visibility", "hidden");
		el.parent().find(".next").css("visibility", "hidden");
	}
	el.scrollable({itemDefault:param['number'],
		onSeek: function(event, i) {
			if(i > 0) el.parent().find(".prev").css("visibility", "visible");
			if(i == 0) el.parent().find(".prev").css("visibility", "hidden");
			if((totalItems - param['number']) == i) {
				if(i % param['number'] <  param['number']) 
					el.parent().find(".next").css("visibility", "hidden");
			}
			else if((totalItems -  param['number']) > i) {
				el.parent().find(".next").css("visibility", "visible");
			}
		}
	});
};

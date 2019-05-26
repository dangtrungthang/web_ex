$(document).ready(function() {
	var listSlide = $(".nvslide").children();
	var listNumber = $(".slide_button").find("a");
	var currentSlide = 0;
	
	var slideTimeout = setInterval(function(){runSlide();}, 5000);
	
	function runSlide() {
		$(listSlide[currentSlide]).effect('drop',700);
		$(listNumber[currentSlide]).removeClass("active");
		currentSlide += 1;
		if(currentSlide > listSlide.length - 1) {
			currentSlide = 0;
		}
		$(listSlide[currentSlide]).fadeIn(700);
		$(listNumber[currentSlide]).addClass("active");
	}
	
	$(".slide_button ul li a").click(function () {
		clearTimeout(slideTimeout);
		$(listSlide[currentSlide]).effect('drop',700);
		$(listNumber[currentSlide]).removeClass("active");
		currentSlide = parseInt($(this).attr("rel"));
		$(listSlide[currentSlide]).fadeIn(700);
		$(listNumber[currentSlide]).addClass("active");
		slideTimeout = setInterval(function(){runSlide();}, 5000);
	});
});
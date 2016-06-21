(function(){
$(function ($) {
   		if( !device.tablet() && !device.mobile() ) {
			$(".player").mb_YTPlayer();
		} else {
			$('.player').addClass('hide');
			$('#hello').addClass('videobg');
		}
});
})();

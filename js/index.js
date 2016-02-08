$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault();
		if ($('textarea').val() == ''){
			$('#outPopUp2').addClass('shake');
			$('#error').show();
		} else {
			$('#outPopUp2').addClass('lightSpeedOut');
			$('#down-arrow').addClass('fadeOut');
			setTimeout(function(){
				$('#outPopUp2').hide();
				$('#outPopUp3').show();
				$('#outPopUp3').addClass('lightSpeedIn');
			}, 1500);
			// $(this).submit();
		}
	});

	$('#contact').click(function(){
		$('#down-arrow').css('color', 'white');
		$('#down-arrow').addClass('fadeInDown');
	});
});
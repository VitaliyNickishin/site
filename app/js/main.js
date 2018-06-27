$(function() {
	$('.book').click(function(){
		$('#modal2').fadeIn(); //отображается окошко
		//$('#modal2').addClass('show'); //2 вар.с добав.класса
	});
	$('.modal2__overlay').click(function(){
		$('#modal2').fadeOut(); //скрываем окошко
		//$('#modal2').removeClass('show'); //2 вар
	});
})
var btnRequest = $('#btnRequest');
var modalFake = $('#modalFake');
var opacity = $('#opacity');

btnRequest.on('click', function () {
		modalFake.css('display','block');
		opacity.css('display', 'block');
})

opacity.on('click', function () {
		modalFake.css('display','none');
		opacity.css('display', 'none');
})


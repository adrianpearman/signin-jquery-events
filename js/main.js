$('.signin').click(function(){$('.modal').fadeIn();});

$('button.close').click(function(){$('.modal').fadeOut();});

$(".submit").on('click',function() {$("input").addClass("error")});

// When the user puts their cursor in one of the input fields, remove the `.error` class from both input elements
// $('input').on('click', function() {$('input').removeClass('error')});

$('input').hover(function() {$('input').removeClass('error')});

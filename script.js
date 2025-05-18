$(document).ready(function () {
  // slideToggle
  $('#toggleBox').click(function () {
    $('#funBox').slideToggle('fast', function () {
      const isVisible = $('#funBox').is(':visible');
      $('#toggleBox').text(isVisible ? 'Hide Box' : 'Show Box');
    });
  });

  // fadeIn / fadeOut
  $('#toggleImage').click(function () {
    $('#funImage').fadeToggle();
  });

  // AJAX .load()
  $('#loadQuote').click(function () {
    $('#jokeText').load('quote.txt');
  });

});
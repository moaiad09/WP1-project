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


  $('#nameInput').on('keyup', function () {
    const name = $(this).val();
    $('#greetingText').text(name ? `Hello, ${name}! 👋` : 'Hello!');
  });

  $('#hoverBox').css('background-color', 'transparent');

  // Hover effect
  $('#hoverBox').hover(
    function () { $(this).css('background-color', '#17a2b8'); }, // on hover
    function () { $(this).css('background-color', 'transparent'); } // on leave
  );

  // Animation (slide)
  $('#animateBtn').click(function () {
    $('#animatedBox').slideUp(500).slideDown(500);
  });
});
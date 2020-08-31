function changebgimg() {
  let rd = 0;
  if (Math.floor(Math.random() * 100 + 1) >= 70) {
    rd = Math.floor(Math.random() * 2 + 1);
  }
  if (rd === 1) {
    $('#imgsrc').css('background-image', 'url(/static/images/parallax.jpg)');
  } else if (rd === 2) {
    $('#imgsrc').css('background-image', 'url(/static/images/parallax3.jpg)');
  }
}

$(document).ready(() => {
  changebgimg();
  $('.padX0').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $('#scroll').offset().top }, 700);
  });
});

const url = window.location.pathname;
let filename = url.substring(0, url.lastIndexOf('/'));
filename = filename.substring(filename.lastIndexOf('/') + 1);

function navScroll() {
  if ($(window).width() >= 992) {
    let scrollTop = 0;
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $('#global-nav').css({
        padding: '0px',
      });
      $('.scrollN').css({
        color: '#101010',
        'padding-bottom': '0px',
        'padding-top': '0px',
      });
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('.scrollN').css({
        'padding-bottom': '10px',
        'padding-top': '10px',
      });
      if (!(filename === 'contact') && !(filename === 'software')) {
        $('.scrollN').css({
          color: 'white',
        });
      }

      $('#global-nav').removeClass('scrolled-nav');
    }
  } else {
    $('.scrollN').css({
      color: '#101010',
      'padding-bottom': '10px',
      'padding-top': '10px',
    });
    $('#global-nav').css({
      padding: '21px',
      'padding-top': '8px',
      'padding-bottom': '8px',
    });
  }
}

$(window).resize(navScroll);
$(document).ready(navScroll);
$(window).scroll(navScroll);

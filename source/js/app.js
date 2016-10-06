var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    scrollwheel: false
  });
}

window.onload = function () {

  (function () {
    'use strict';

    if (document.getElementById('auth_btn') || document.getElementById('welcome_btn')) {
      auth_btn.addEventListener("click", showAuth);
      welcome_btn.addEventListener("click", showWelcome);
    }

    function showAuth() {
      document.getElementById('welcome_block').style.transform = 'scaleX(0)';
      // Я сделяль
      setTimeout(function () {
        document.getElementById('welcome_block').style.display = 'none';
        document.getElementById('auth_block').style.display = 'inline-block';

        setTimeout(function () {
          document.getElementById('auth_block').style.transform = 'scaleX(1)';
        }, 10);

      }, 600);
    }

    function showWelcome() {
      document.getElementById('auth_block').style.transform = 'scaleX(0)';

      setTimeout(function () {
        document.getElementById('auth_block').style.display = 'none';
        document.getElementById('welcome_block').style.display = 'inline-block';

        setTimeout(function () {
          document.getElementById('welcome_block').style.transform = 'scaleX(1)';
        }, 10);

      }, 600);
    }

  })();

// Yandex map
//   (function () {
//
//     ymaps.ready(init);
//     var
//       myMap;
//
//     function init() {
//       myMap = new ymaps.Map("map", {
//         center: [44.73498924390664, 37.73530074198924],
//         zoom: 14,
//         controls: []
//       });
//
//       myMap.behaviors.disable('scrollZoom');
//     }
//
//   })();
// }();

// Google Map

  (function () {

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

  })();
}();


// scroll
(function () {
  $('a[href^="#"]').on('click', function () {
    var element = $(this).attr('href');
    $('body').animate({
        scrollTop: $(element).offset().top
      }, 1000
    );
    return false;
  });
})();


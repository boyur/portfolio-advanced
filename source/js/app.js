(function() {
  'use strict';

  auth_btn.addEventListener("click", showAuth);
  welcome_btn.addEventListener("click", showWelcome);

  function showAuth() {
    document.getElementById('welcome_block' ).style.transform = 'scaleX(0)';
    // Я сделяль
    setTimeout(function () {
      document.getElementById('welcome_block' ).style.display = 'none';
      document.getElementById('auth_block' ).style.display = 'inline-block';

      setTimeout(function () {
        document.getElementById('auth_block' ).style.transform = 'scaleX(1)';
      },10);

    },600);
  }

  function showWelcome() {
    document.getElementById('auth_block' ).style.transform = 'scaleX(0)';

    setTimeout(function () {
      document.getElementById('auth_block' ).style.display = 'none';
      document.getElementById('welcome_block' ).style.display = 'inline-block';

      setTimeout(function () {
        document.getElementById('welcome_block' ).style.transform = 'scaleX(1)';
      },10);

    },600);
  }

})();
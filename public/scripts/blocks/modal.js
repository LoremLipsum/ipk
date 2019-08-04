'use strict';

(function() {

  var modals = document.querySelectorAll('.js-modal');

  console.log('sdfsaafsa')

  if (modals.length) {
    var btnsClose = document.querySelectorAll('.js-modal-close');
    var overlays = document.querySelectorAll('.js-modal-overlay');

    var btnsCallback = document.querySelectorAll('.js-callback-button');
    var callback = document.querySelector('.js-callback-modal');
    var btnsFeedback = document.querySelectorAll('.js-feedback-button');
    var feedback = document.querySelector('.js-feedback-modal');
    var ESC = 27;

    var close = function() {
      for (var i = 0; i < modals.length; i += 1) {
        modals[i].classList.remove('active');
      }
    }

    for (var i = 0; i < btnsClose.length; i += 1) {
      btnsClose[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.parentNode.classList.remove('active');
      });
    }

    for (var i = 0; i < overlays.length; i += 1) {
      overlays[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.remove('active');
      });
    }

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener('keyup', onEscKeyup);

    for (var i = 0; i < btnsCallback.length; i += 1) {
      btnsCallback[i].addEventListener('click', function(e) {
        e.preventDefault();
        callback.classList.add('active');
      });
    }

    for (var i = 0; i < btnsFeedback.length; i += 1) {
      btnsFeedback[i].addEventListener('click', function(e) {
        e.preventDefault();
        feedback.classList.add('active');
      });
    }

  }

})();

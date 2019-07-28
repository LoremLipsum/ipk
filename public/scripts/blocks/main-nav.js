jQuery(function($){
  var $mainNavBtn = $('.js-main-nav-btn');

  if($mainNavBtn) {
    var $mainNavPanel = $('.js-main-nav-panel');
    var ESC = 27;

    if(+$(window).outerWidth() < 768) {
      $mainNavBtn.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $mainNavPanel.toggleClass('active');
      });

      $(document).on('keyup', function() {
        if (e.keyCode === ESC) {
          $mainNavPanel.removeClass('active');
          $mainNavBtn.removeClass('active');
        }
      });
    }
  }

});

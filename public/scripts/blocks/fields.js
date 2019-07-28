jQuery(function($){
  var $feildTel = $('input[type="tel"]');

  if($feildTel.length) {
    $feildTel.mask("+7 (999) 999-99-99");
  }
});

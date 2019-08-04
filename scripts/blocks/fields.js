jQuery(function($){
  var $feildTel = $('input[type="tel"]');
  var $textareas = $('textarea');

  if($feildTel.length) {
    $feildTel.mask("+7 (999) 999-99-99");
  }

  $textareas.html($textareas.html().trim());

});

$(function() {
  function nearBottomOfPage() {
    return $(window).scrollTop() > $(document).height() - $(window).height() - 200;
  }
  
  function triggerHooks(hook) {
    fn = hook + '_spaghetti';
    if (typeof window.fn == 'function') {
      fireHook(fn);
    }
  }
  
  function fireHook(func){
    this[func].apply(this, Array.prototype.slice.call(arguments, 1));
  }

  $('.spaghetti-empty').each(function() {
    $.ajax({
      url: $(this).data('spaghetti-url') + '?page=' + $(this).data('spaghetti-next-page'),
      type: 'get',
      dataType: 'script',
      success: function() {
        $(this).removeClass('spaghetti-empty');
      }
    });
  });
  
  $(window).scroll(function(){
    if ($('.spaghetti').data('spaghetti-enabled') == 1) {
      if(nearBottomOfPage()) {
        triggerHooks('pre');
        $('.spaghetti').data('spaghetti-enabled', 0);
        $('.spaghetti').addClass('spaghetti-loading');
        $.ajax({
          url: $('.spaghetti').data('spaghetti-url') + '?page=' + $('.spaghetti').data('spaghetti-next-page'),
          type: 'get',
          dataType: 'script',
          success: function() {
            $(window).sausage('draw');
            triggerHooks('post');
          }
        });
      }
    }
  });
  $(window).sausage();
});
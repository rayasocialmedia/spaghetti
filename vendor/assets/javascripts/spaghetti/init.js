$(function() {
  function nearBottomOfPage() {
    return $(window).scrollTop() > $(document).height() - $(window).height() - 200;
  }

  $(window).scroll(function(){
    if ($('.spaghetti').data('spaghetti-enabled') == 1) {
      if(nearBottomOfPage()) {
        $('.spaghetti').data('spaghetti-enabled', 0);
        $('.spaghetti').addClass('spaghetti-loading');
        $.ajax({
          url: $('.spaghetti').data('spaghetti-url') + '?page=' + $('.spaghetti').data('spaghetti-next-page'),
          type: 'get',
          dataType: 'script',
          success: function() {
            $(window).sausage('draw');
          }
        });
      }
    }
  });
  $(window).sausage();
}); 
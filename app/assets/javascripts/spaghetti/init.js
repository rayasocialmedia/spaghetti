(function() {
  jQuery(function() {
    $(window).scroll(function() {
      var pageParameter;
      if ($('.spaghetti').data('spaghetti-enabled') === 1) {
        if ($(window).scrollTop() > ($(document).height() - $(window).height() - 200)) {
          triggerHooks('pre');
          $('.spaghetti').data('spaghetti-enabled', 0);
          $('.spaghetti').addClass('spaghetti-loading');
          if ($('.spaghetti').data('spaghetti-url').indexOf("?") === -1) {
            pageParameter = '?page=';
          }
        } else {
          pageParameter = '&page=';
        }
        return window.spaghetti.load($('.spaghetti'));
      }
    });
    $(window).sausage();
    return $('.spaghetti-empty').each(function() {
      return window.spaghetti.load($(this));
    });
  });

  window.spaghetti = {
    triggerHooks: function(hook) {
      var fn;
      fn = hook + '_spaghetti';
      if (typeof window[fn] !== 'undefined') {
        this.fireHooks(fn);
      }
      return this;
    },
    fireHooks: function(func) {
      return window[func].apply(this, Array.prototype.slice.call(arguments, 1));
    },
    load: function(elm) {
      var pageParameter;
      elm.data('spaghetti-enabled', 0);
      elm.addClass('spaghetti-loading');
      elm.removeClass('spaghetti-empty');
      if (elm.data('spaghetti-url').indexOf("?") === -1) {
        pageParameter = '?page=';
      } else {
        pageParameter = '&page=';
      }
      $.ajax({
        type: 'get',
        url: elm.data('spaghetti-url') + pageParameter + elm.data('spaghetti-next-page'),
        dataType: 'script',
        success: function() {
          $(window).sausage('draw');
          window.spaghetti.triggerHooks('post');
          return true;
        }
      });
      return this;
    },
    reset: function(elm) {
      elm.find('.spaghetti-items').html('');
      elm.data('spaghetti-enabled', 1);
      elm.data('spaghetti-next-page', 0);
      return this.load(elm);
    }
  };

}).call(this);
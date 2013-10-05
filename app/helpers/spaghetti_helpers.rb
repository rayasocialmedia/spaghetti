module SpaghettiHelpers
  def spaghetti name, path_or_items, options = {}
    output = ''.html_safe
    if path_or_items.class.name == 'String'
      output << "<div class=\"#{ name } spaghetti spaghetti-empty\" data-spaghetti-enabled=\"1\" data-spaghetti-url=\"#{ path_or_items }\" data-spaghetti-next-page=\"1\"><div class=\"#{ name }-items spaghetti-items\"></div><div class=\"throbber\">#{ image_tag 'throbber.gif' }</div></div>".html_safe
    else
      if path_or_items.any?
        if options[:partial]
          items = j(render(:partial => options[:partial], :collection => path_or_items))
        else
          items = j(render(path_or_items))
        end
          output << "$('.#{ name } .#{ name }-items').append('#{ items }');".html_safe
        output << "$('.#{ name }').data('spaghetti-next-page', #{ params[:page].to_i + 1 });".html_safe
        output << "$('.#{ name }').data('spaghetti-enabled', '1');".html_safe
      else
        output << "$('.#{ name }').data('spaghetti-enabled', '0');".html_safe
        output << "$('.#{ name }').append($('<div class=\"spaghetti-disabled\"></div>'));".html_safe
      end
      output << "$('.#{ name }').removeClass('spaghetti-loading');".html_safe
    end
    output
  end  
end
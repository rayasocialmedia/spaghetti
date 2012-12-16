require File.dirname(__FILE__) + '/../../app/helpers/spaghetti_helpers'

module Spaghetti
  class Engine < ::Rails::Engine
    initializer "spaghetti.setup_helpers" do |app|
      app.config.to_prepare do
        ActionController::Base.send :helper, SpaghettiHelpers
      end
    end
  end
end
# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'spaghetti/version'

Gem::Specification.new do |gem|
  gem.name          = "spaghetti"
  gem.version       = Spaghetti::VERSION
  gem.platform    = Gem::Platform::RUBY
  gem.authors       = ["Omar Abdel-Wahab"]
  gem.email         = ["owahab@gmail.com"]
  gem.description   = %q{Spaghetti - Rails Endless Page}
  gem.summary       = %q{Spaghetti - Rails Endless Page}
  gem.homepage      = "http://github.com/rayasocialmedia/spaghetti"
  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
  gem.license       = "MIT"

  gem.add_dependency 'rails', '>= 3.1', '< 4.1'
  gem.add_dependency 'jquery-rails'
  gem.add_dependency 'jquery-ui-rails'
end

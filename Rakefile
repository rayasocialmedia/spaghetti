require 'bundler'
Bundler::GemHelper.install_tasks

task :default => [:spec]
desc 'run Rspec specs'
task :spec do
  sh 'rspec spec'
end

namespace :deploy do
  task :to_memory, :roles => :web do
    run "rm -rf /mnt/ram/www/fotonatorte.ru/*; cp -r /var/www/fotonatorte.ru/current/public/* /mnt/ram/www/fotonatorte.ru/"
  end
end

set :stages, %w(production staging)
set :default_stage, "staging"

require 'capistrano/ext/multistage'

set :application, "fotonatorte.ru" 

role :app, "178.250.241.76"
role :web, "178.250.241.76"
role :db,  "178.250.241.76", :primary => true

set :scm, :git
set :scm_verbose, true
set :git_enable_submodules, true

set :repository,  "git@github.com:kononencheg/Photo-Cake.git"

default_run_options[:pty] = true

set :ssh_options, { :forward_agent => true }
set :use_sudo, false


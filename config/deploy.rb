
set :stages, %w(production staging)
set :default_stage, "staging"

require 'capistrano/ext/multistage'

set :application, "fotonatorte.ru" 

role :app, application
role :web, application
role :db,  application, :primary => true

set :scm, :git
set :scm_verbose, true

set :repository,  "git@github.com:kononencheg/Photo-Cake.git"

default_run_options[:pty] = true

set :ssh_options, { :forward_agent => true }
set :use_sudo, false


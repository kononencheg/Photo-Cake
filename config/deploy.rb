# Deploy simple PHP-site using Capistrano
# Complete working example for a very simple PHP-site.
#
# Usage:
# cap deploy:setup
# cap deploy
#
# See end for links

set :application, "Photo-Cake" 

set :repository,  "git@github.com:kononencheg/#{application}.git"

set :scm, :git

set :scm_verbose, true
set :ssh_options, { :forward_agent => true }

default_run_options[:pty] = true

set :branch, "master"

role :app, "178.250.241.76"
role :web, "178.250.241.76"
role :db,  "178.250.241.76", :primary => true

set :use_sudo, false

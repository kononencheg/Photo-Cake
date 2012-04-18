
set :branch, "production"
set :deploy_to, "/var/www/#{application}"

after "deploy", "deploy:to_memory"

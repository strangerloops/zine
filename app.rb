require 'sinatra'

class ZineSite < Sinatra::Base

  set :run, true
  set :server, 'webrick'

  get '/' do
    erb :home
  end

  get '/about' do
    erb :about
  end

  run! if app_file == $0
end
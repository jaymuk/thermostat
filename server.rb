require 'sinatra'

set :public_folder, proc { File.join(root) }

post '/temperature_change' do
  # p params[:temp]
  # "200"
  # redirect ("/")
  "Message received by server: #{params[:temp]}"
end

get '/' do
  "Hello"
end
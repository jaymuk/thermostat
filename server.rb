require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }

post '/temperature_change' do
  
  if params[:temp].to_i < 12
    "It's too cold. Turn the heating on"
  elsif params[:temp].to_i > 25
    "You might wanna get an air-con"
  else
    "No need to turn on heating!" 
  end
    
end

# get '/' do
#   "Hello"
# end

# get '/time.json' do
#   headers 'Access-Control-Allow-Origin' => '*'
#   { time: Time.now.to_s, city: "London" }.to_json
# end
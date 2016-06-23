require 'sinatra'

Tilt.register :es6, Tilt[:babel]

helpers do
  def es6(*args)
    "<script>#{render(:es6, *args)}</script>"
  end
end

get '/' do
  @js = es6(:index)
  erb :index
end

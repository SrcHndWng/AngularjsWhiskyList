class WhiskiesController < ApplicationController
  def index
  end

  def new
  end

  def create
    whisky = Whisky.new(:name => params[:name], :price => params[:price])
    whisky.save
    render :nothing => true
  end

  def list
    data = Whisky.all
    render :json => data
  end
end

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

  def edit
  end

  def list
    data = Whisky.all
    render :json => data
  end

  def detail
    whisky = Whisky.find_by_id(params[:id])
    render :json => whisky
  end

  def update
    whisky = Whisky.find_by_id(params[:id])
    whisky.name = params[:name]
    whisky.price = params[:price]
    whisky.save
    render :nothing => true
  end

  def destroy
    Whisky.delete(params[:id])
    render :nothing => true
  end
end

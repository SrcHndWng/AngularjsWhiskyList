class WhiskiesController < ApplicationController
  def index
  end

  def list
    data = Whisky.all
    render :json => data
  end
end

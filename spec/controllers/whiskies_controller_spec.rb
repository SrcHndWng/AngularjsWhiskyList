require 'spec_helper'

describe WhiskiesController do

  describe "GET 'index'" do
    before(:each) do
      get :index
    end

    it "returns http success" do
      response.should be_success
    end
  end

  describe "GET 'list'" do
    before(:each) do
      whisky = Whisky.new
      whisky.name = 'Laphroaig Quarter Cask'
      whisky.price = 49.99
      whisky.save

      whisky = Whisky.new
      whisky.name = 'Johnnie Walker Black'
      whisky.price = 33.97
      whisky.save

      whisky = Whisky.new
      whisky.name = 'Canadian Club'
      whisky.price = 19.99
      whisky.save

      get :list, :format => "json"
    end

    it "returns json" do
      data = JSON.parse(response.body)
      data.count.should eq(3)
      data[0]['name'].should eq('Laphroaig Quarter Cask')
      data[0]['price'].should eq('49.99')
    end
  end

end

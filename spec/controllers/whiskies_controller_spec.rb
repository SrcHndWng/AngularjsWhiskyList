require 'spec_helper'

describe WhiskiesController do
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

  describe "GET 'index'" do
    before(:each) do
      get :index
    end

    it "returns http success" do
      response.should be_success
    end
  end

  describe "GET 'list'" do
    it "returns json" do
      data = JSON.parse(response.body)
      data.count.should eq(3)
      data[0]['name'].should eq('Laphroaig Quarter Cask')
      data[0]['price'].should eq('49.99')
    end
  end

  describe "GET 'new'" do
    before(:each) do
      get :new
    end

    it "returns http success" do
      response.should be_success
    end
  end

  describe "POST 'create'" do
    before(:each) do
      post :create, {'name' => 'Jack Daniels', 'price' => '39.99'}
    end

    it "returns http success" do
      response.should be_success
    end

    it "save success" do
      whiskies = Whisky.all
      whiskies.length.should == 4
    end
  end

  describe "GET 'edit'" do
    before(:each) do
      get :edit, {'id' => 1}
    end

    it "returns http success" do
      response.should be_success
    end
  end

  describe "GET 'detail'" do
    before(:each) do
      get :detail, {'id' => 1}
    end

    it "returns json" do
      data = JSON.parse(response.body)
      data['name'].should eq('Laphroaig Quarter Cask')
      data['price'].should eq('49.99')
    end
  end

  describe "POST 'update'" do
    before(:each) do
      post :update, {'id' => 2, 'name' => 'Johnnie Walker Red', 'price' => '20.99'}
    end

    it "returns http success" do
      response.should be_success
    end

    it "update success" do
      data = Whisky.find_by_id(2)
      data['name'].should eq('Johnnie Walker Red')
      data['price'].should eq(20.99)
    end
  end


  describe "DELETE 'destroy'" do
    before(:each) do
      get :destroy, {'id' => 1}
    end

    it "returns http success" do
      response.should be_success
    end

    it "save success" do
      whiskies = Whisky.all
      whiskies.length.should == 2
    end
  end
end

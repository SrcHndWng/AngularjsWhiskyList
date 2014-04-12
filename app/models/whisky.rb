class Whisky < ActiveRecord::Base
  validates :name,  :presence => {:message =>'name is required.'}
  validates :price,  :presence => {:message =>'price is required.'}
end

class ChangeWhiskiesPriceType < ActiveRecord::Migration
  def self.up
    change_column :whiskies, :price, :decimal
  end

  def self.down
    change_column :whiskies, :price, :integer
  end
end

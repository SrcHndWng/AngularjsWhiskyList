class CreateWhiskies < ActiveRecord::Migration
  def change
    create_table :whiskies do |t|
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end

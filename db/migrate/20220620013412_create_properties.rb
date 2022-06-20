class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :address
      t.integer :price
      t.string :rooms
      t.integer :sq_ft
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end

class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name_1
      t.string :name_2
      t.string :comments
      t.integer :agent_id

      t.timestamps
    end
  end
end

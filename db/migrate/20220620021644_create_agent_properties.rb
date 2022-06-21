class CreateAgentProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :agent_properties do |t|
      t.integer :agent_id
      t.integer :property_id

      t.timestamps
    end
  end
end

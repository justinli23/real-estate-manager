class CreateAgentProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :agent_properties do |t|
      t.string :agent_id
      t.string :property_id

      t.timestamps
    end
  end
end

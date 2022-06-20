class Property < ApplicationRecord
    has_many :agent_properties
    has_many :agents, through: :agent_properties
end

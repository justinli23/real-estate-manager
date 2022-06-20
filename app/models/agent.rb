class Agent < ApplicationRecord
    has_many :clients
    has_many :agent_properties
    has_many :properties, through: :agent_properties
end

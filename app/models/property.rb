class Property < ApplicationRecord
    has_many :agent_properties
    has_many :agents, through: :agent_properties
    validates :address, :price, :rooms, :sq_ft, presence: true
    validates :address, uniqueness: true
end

class AgentProperty < ApplicationRecord
    belongs_to :agent
    belongs_to :property
    validates :agent_id, :property_id, presence: true
end

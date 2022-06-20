class AgentProperty < ApplicationRecord
    belongs_to :agent
    belongs_to :property 
end

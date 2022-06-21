class Client < ApplicationRecord
    belongs_to :agent
    validates :name_1, presence: true
    validates :name_1, uniqueness: true
end

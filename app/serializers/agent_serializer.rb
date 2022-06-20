class AgentSerializer < ActiveModel::Serializer
  attributes :id, :name, :employee_id, :review, :client_id, :employee_id
end

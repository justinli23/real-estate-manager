class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :price, :rooms, :sq_ft, :image, :description
end

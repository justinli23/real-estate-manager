class PropertiesController < ApplicationController

def create
    property = Property.create!(property_params)
        render json: property, status: :created
end
def index
    render json: Property.all
end

def show
    render json: Property.find(params[:id])
end

private

def property_params
    params.permit(:name, :address, :price, :rooms, :sq_ft, :image, :description)
end

end

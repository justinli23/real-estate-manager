class PropertiesController < ApplicationController
def index
    render json: Property.all
end

def show
    render json: Property.find(params[:id])
end

end

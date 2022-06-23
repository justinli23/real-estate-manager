class ClientsController < ApplicationController

    def show
        render json: Client.find(params[:id])
    end

    def create
        agent = Agent.create!(params.permit(:name))
        render json: agent, status: :created
    end

end

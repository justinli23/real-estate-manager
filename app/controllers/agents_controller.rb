class AgentsController < ApplicationController
    def index
        render json: Agent.all
    end

    def show
        render json: find_agent
    end

    def create
        agent = Agent.create!(agent_params)
        render json: agent, status: :created
    end

    def destroy
        find_agent.agent_properties.destroy_all
        find_agent.destroy
        head :no_content
    end

    private

    def find_agent
        agent.find(params[:id])
    end

    def agent_params
        params.permit(:name)
    end

end

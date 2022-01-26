class GoalsController < ApplicationController
  def index
    render json: Goal.all
  end

  def show
    goal = Goal.find_by(id:params[:id])
    render json: goal, status: :ok
  end

  def create
    goal = @current_user.goals.create!(goal_params)
    render json: goal, status: :created
  end

  def destroy
    goal = Goal.find_by(id: params[:id])
    goal.destroy
    head :no_content
end

  private

  def goal_params
    params.permit(:id, :description, :name)
  end
  
end

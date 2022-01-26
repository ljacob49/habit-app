class HabitsController < ApplicationController
  def index
    render json: Habit.all
  end

  def show
    habit = Habit.find_by(id:params[:id])
    render json: habit, status: :ok
  end

  def create
    habit = @current_user.habits.create!(habit_params)
    render json: habit, status: :created
  end

  def destroy
    habit = Habit.find_by(id: params[:id])
    habit.destroy
    head :no_content
end

  private

  def habit_params
    params.permit(:id, :name, :description)
  end
end

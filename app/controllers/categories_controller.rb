class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories
  end 
  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to categories_path
    else
      render :new
    end
  end

  #def index
    #@categories = Category.alphabetize
  #end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end

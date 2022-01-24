class AddNameToGoals < ActiveRecord::Migration[6.1]
  def change
    add_column :goals, :name, :string
  end
end

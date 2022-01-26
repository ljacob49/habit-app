class Goal < ApplicationRecord
  belongs_to :user

  validates :description, presence: true
  validates :name, presence: true
end

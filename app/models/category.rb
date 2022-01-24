class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :habits
  
    scope :alphabetize, -> { order(name: :asc) }
end

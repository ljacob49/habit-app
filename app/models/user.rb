class User < ApplicationRecord
  has_many :goals, dependent: :destroy
  has_many :habits
  has_secure_password

  validates :username, presence: true, uniqueness: true
end

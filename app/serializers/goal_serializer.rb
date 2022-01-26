class GoalSerializer < ActiveModel::Serializer
  attributes :id, :description, :name
  has_one :user
end

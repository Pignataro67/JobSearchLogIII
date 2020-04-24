class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date, :notes
  belongs_to :type
end
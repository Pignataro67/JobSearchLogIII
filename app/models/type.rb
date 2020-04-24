class Type < ApplicationRecord
  has_many :tasks
  validates :name, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :type_id, presence: true
end
class Task < ApplicationRecord
  belongs_to :type
  validates :name, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :type_id, presence: true
  
  def date_formatted
    self.date.strftime("%B %e, %Y")
  end
end
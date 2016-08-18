class Stacking < ApplicationRecord
  belongs_to :user
  belongs_to :media, polymorphic: true
  has_many :notes
end

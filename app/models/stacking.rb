class Stacking < ApplicationRecord
  belongs_to :user
  belongs_to :show, polymorphic: true
  belongs_to :album, polymorphic: true
  has_many :notes
end

class Show < ApplicationRecord
  has_many :stackings
  has_many :users, through: :stackings, as: :media
end

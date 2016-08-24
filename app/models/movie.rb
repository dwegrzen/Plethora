class Movie < ApplicationRecord
  has_many :stackings, as: :media
  has_many :users, through: :stackings, as: :media
end

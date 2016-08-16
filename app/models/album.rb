class Album < ApplicationRecord
  has_many :stackings
  has_many :users, through: :stackings
  
end

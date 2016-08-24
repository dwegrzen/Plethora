class Album < ApplicationRecord
  has_many :stackings, as: :media
  has_many :users, through: :stackings, as: :media
  default_scope { order(name: :asc)}

end

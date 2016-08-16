class User < ApplicationRecord
  has_secure_password
  has_many :shows, through: :stackings
  has_many :albums, through: :stackings
  validates :email, presence: true, uniqueness: true, format: {with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/}

end

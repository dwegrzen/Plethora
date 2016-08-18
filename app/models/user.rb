class User < ApplicationRecord
  has_secure_password
  has_many :shows, through: :stackings, source: :media, source_type: 'Show'
  has_many :albums, through: :stackings, source: :media, source_type: 'Album'
  has_many :stackings
  validates :email, presence: true, uniqueness: true, format: {with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/}

end

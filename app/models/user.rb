class User < ApplicationRecord
  has_secure_password
  has_many :shows, through: :stackings, source: :media, source_type: 'Show'
  has_many :albums, through: :stackings, source: :media, source_type: 'Album'
  has_many :movies, through: :stackings, source: :media, source_type: 'Movie'
  has_many :stackings
  validates :email, presence: true, uniqueness: true, format: {with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/}


  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver
  end

end

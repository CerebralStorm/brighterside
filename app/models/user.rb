class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :orders
  has_many :charges

  validates :email, uniqueness: true, presence: true
  validates_confirmation_of :password

  serialize :roles
  after_initialize do |_user|
    self.roles ||= []
  end

  # Override Devise Method
  # def password_required?
  #   false
  # end

  def city_state_zip
    [city, state, zip].join(', ')
  end
end

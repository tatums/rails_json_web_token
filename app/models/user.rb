class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :confirmable, :lockable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end

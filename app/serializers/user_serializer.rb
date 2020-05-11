class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_name, :profile_photo, :reviews, :role
end

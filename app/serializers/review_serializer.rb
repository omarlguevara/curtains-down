class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :user_name

   def user_name
     object.user.user_name
   end
 end

class TheaterSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :genre, :site

   has_many :reviews
 end

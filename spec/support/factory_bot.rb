require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :theater do
    sequence(:title) {|n| "title#{n}"}
    sequence(:image) {|n| "image#{n}"}
    sequence(:description) {|n| "description#{n}"}
    sequence(:site) {|n| "site#{n}"}
  end

  factory :review do
    sequence(:rating) {|n| n}
    sequence(:comment) {|n| "comment#{n}"}
  end
end

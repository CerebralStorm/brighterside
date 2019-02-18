FactoryBot.define do
  factory :charge do
    user_id { 1 }
    order_id { 1 }
    amount { 1.5 }
    stripe_customer { 'MyString' }
    currency { 'MyString' }
    description { 'MyString' }
  end
end

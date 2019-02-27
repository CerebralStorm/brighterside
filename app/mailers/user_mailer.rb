class UserMailer < ApplicationMailer
  default from: 'noreply@area51hemp.com'
  layout 'user_mailer'

  def order_confirmation(order_id)
    @order = Order.find(order_id)
    @user = @order.user
    mail(to: @user.email, subject: 'Order Confirmation - The Brighter Side')
  end
end

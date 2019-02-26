module Api
  module V1
    class OrdersController < BaseController

      def index
        @orders = current_user.orders.includes(:order_line_items)
      end

      def show
        # Not Safe
        @order = Order.find(params[:id])
      end
    end
  end
end

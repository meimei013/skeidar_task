import { ShoppingBasket } from "lucide-react";
import React from "react";
interface OrderNo {
  orderNo: number;
}

const Cart = ({ orderNo }: OrderNo) => {
  return (
    <div className="relative">
      <ShoppingBasket className="w-6 h-6" />
      <div className="absolute -top-2 -right-4">
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200 text-xs p-2">
          {orderNo}
        </div>
      </div>
    </div>
  );
};

export default Cart;

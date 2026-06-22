import React from "react";

function Cart({ count }) {
  return (
    <div className="cart">
      Cart Items: {count}
    </div>
  );
}

export default Cart;
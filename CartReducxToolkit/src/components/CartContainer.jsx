import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>your bag</header>
      <div>
        {cartItems.map((items) => {
          return <CartItem key={items.id} {...items} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>{" "}
        <h4></h4>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

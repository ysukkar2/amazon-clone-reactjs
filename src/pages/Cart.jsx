import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> :
        cart.map((item, index) => (  // Use index to ensure each unique item is mapped
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;

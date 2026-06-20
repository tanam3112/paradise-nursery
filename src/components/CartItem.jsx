import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src="https://via.placeholder.com/100"
            alt={item.name}
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <button
        onClick={() => window.location.reload()}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
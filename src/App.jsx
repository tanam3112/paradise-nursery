import { useState } from "react";
import { useSelector } from "react-redux";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [showProductList, setShowProductList] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (page === "products") {
    return (
      <>
        <nav>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("products")}>
            Plants
          </button>

          <button onClick={() => setPage("cart")}>
            Cart ({cartCount})
          </button>
        </nav>

        <ProductList />
      </>
    );
  }

  if (page === "cart") {
    return (
      <>
        <nav>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("products")}>
            Plants
          </button>

          <button onClick={() => setPage("cart")}>
            Cart ({cartCount})
          </button>
        </nav>

        <CartItem />
      </>
    );
  }

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful
          indoor plants. We provide high-quality plants that bring life and
          freshness into your home.
        </p>

        <button
          className="start-btn"
          onClick={() => {
            setShowProductList(true);
            setPage("products");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
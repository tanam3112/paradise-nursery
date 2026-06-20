import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  const plantCategories = [ /* giữ nguyên data của bạn */ ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      {/* ✅ NAVBAR (QUAN TRỌNG BỊ THIẾU) */}
      <nav>
        <h2>Plant Store</h2>
      </nav>

      <h1>Plant Shop</h1>

      {plantCategories.map((category) => (
        <div key={category.name} style={{ marginBottom: "30px" }}>
          <h2>{category.name}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {category.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  width: "160px",
                }}
              >
                <img src={plant.image} alt={plant.name} width="100" />

                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
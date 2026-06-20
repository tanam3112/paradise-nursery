import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  const plantCategories = [
    {
      name: "Air Purifying Plants",
      plants: [
        { id: 1, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Snake Plant", price: 20, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Boston Fern", price: 14, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Rubber Plant", price: 25, image: "https://via.placeholder.com/150" },
      ],
    },
    {
      name: "Medicinal Plants",
      plants: [
        { id: 7, name: "Basil", price: 10, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Mint", price: 12, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Aloe Medicinal", price: 16, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Turmeric", price: 22, image: "https://via.placeholder.com/150" },
        { id: 11, name: "Ginger", price: 20, image: "https://via.placeholder.com/150" },
        { id: 12, name: "Neem", price: 19, image: "https://via.placeholder.com/150" },
      ],
    },
    {
      name: "Aromatic Plants",
      plants: [
        { id: 13, name: "Lavender", price: 18, image: "https://via.placeholder.com/150" },
        { id: 14, name: "Rosemary", price: 17, image: "https://via.placeholder.com/150" },
        { id: 15, name: "Jasmine", price: 20, image: "https://via.placeholder.com/150" },
        { id: 16, name: "Mint Aromatic", price: 11, image: "https://via.placeholder.com/150" },
        { id: 17, name: "Chamomile", price: 13, image: "https://via.placeholder.com/150" },
        { id: 18, name: "Lemongrass", price: 15, image: "https://via.placeholder.com/150" },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
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
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="100"
                />

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
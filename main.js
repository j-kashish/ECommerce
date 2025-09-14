import { showProductContainer } from "./homeProductCards.js";

fetch("./api/products.json")
  .then((response) => response.json())
  .then((products) => {
    showProductContainer(products);
  })
  .catch((err) => console.error("Failed to load products:", err));

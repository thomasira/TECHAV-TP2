import { useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  const products = [
    {
      "id": 1,
      "name": "Yogurt",
      "description": "greek yogurt",
      "price": 45.34,
      "category": "food"
    },
    {
      "id": 2,
      "name": "Sofa",
      "description": "comfy sofa",
      "price": 2032.99,
      "category": "furniture"
    },
    {
      "id": 3,
      "name": "The big atlas",
      "description": "an atlas of the world",
      "price": 43.29,
      "category": "book"
    },
    {
      "id": 4,
      "name": "Wok",
      "description": "cast iron wok",
      "price": 67.99,
      "category": "kitchen tool"
    },
  ]
  return (
    <div className="bg-blue-500 h-screen p-3">
        <Header title="by and buy"/>
        { products.length > 0 ? (
            <Products products={ products }/>
        ) : (
            <h2 className="text-white font-bold p-3 text-center text-red-500">No products</h2>
        )}
    </div>
  );
}

export default App;

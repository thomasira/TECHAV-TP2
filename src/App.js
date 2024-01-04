import { useEffect, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";

function App() {
    const [products, setProducts] = useState([
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
        }
    ])
    const addProduct = product => { 
        const newProduct = product;
        setProducts([...products, newProduct]);
    }
    const deleteProduct = id => {
        setProducts(products.filter(products => products.id !== id));
    }
    const updateProduct = id => {
        console.log(id)
    }
    const [showAdd, setShowAdd] = useState(false);

    return (
        <div className="bg-blue-500 h-screen p-3 flex flex-col items-center gap-5">
            <Header title='By & Buy' toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
            { showAdd && <AddProduct onAdd={ addProduct }/> }
            { products.length > 0 ? (
                <Products products={ products } onDelete={ deleteProduct }/>
            ) : (
                <h2 className="text-white font-bold p-3 text-center text-red-500">No products</h2>
            )}
        </div>
    );
}

export default App;

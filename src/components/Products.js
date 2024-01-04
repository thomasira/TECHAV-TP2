import Product from "./Product";
import UpdateProduct from "./UpdateProduct";
import { useEffect, useState } from "react";

const Products = ({ products, onDelete, onUpdate }) => {
    const [updateId, setUpdateId] = useState(false);
    const showUpdate = id => setUpdateId(id);
    
    return (
        <ul className="flex flex-col gap-2 container">
            { products.map(product => (
                product.id !== updateId ? (
                    <Product product={ product } key={ product.id } onDelete={ onDelete } onUpdate={ showUpdate }/>
                ) : (
                    <UpdateProduct product={ product } key={ product.id } onUpdate={ onUpdate } toggleForm={ () => setUpdateId(false) }/>
                )
            )) }
        </ul>
    );
}

export default Products;
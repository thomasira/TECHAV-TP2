import Product from "./Product";
import UpdateProduct from "./UpdateProduct";

const Products = ({ products, onDelete, updateId }) => {
    console.log(updateId)
    return (
        <ul className="flex flex-col gap-2 container">
            { products.map(product => (
                product.id !== updateId ? (
                    <Product product={ product } key={ product.id } onDelete={ onDelete } onUpdate={ updateId }/>
                ) : (
                    <UpdateProduct product={ product } key={ product.id } onDelete={ onDelete }/>
                )
            )) }
        </ul>
    );
}

export default Products;
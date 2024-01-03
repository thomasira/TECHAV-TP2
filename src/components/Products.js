import Product from "./Product";

const Products = ({ products, onDelete }) => {
    return (
        <ul className="flex flex-col gap-2 container">
            { products.map(product => 
                (<Product product={ product } key={ product.id } onDelete={ onDelete }/>)) 
            }
        </ul>
    );
}

export default Products;
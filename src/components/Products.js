import Product from "./Product";

const Products = (props) => {
    return (
        <ul className="mt-6">
            { props.products.map(product => (<Product product={ product } key={ product.id }/>)) }
        </ul>
    );
}

export default Products;
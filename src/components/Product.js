
const Product = ({ product }) => {
    return (
        <li className="">
            <div>
                <h3 className="font-bold">{ product.name }</h3>
            </div>
        </li>
    );
}

export default Product;
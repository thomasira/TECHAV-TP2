import { FaTimes } from 'react-icons/fa';

const Product = ({ product, onDelete }) => {
    return (
        <li className="card bg-green-100 p-1 rounded-lg flex flex-1">
            <div>
                <div className="flex-1">
                    <h3 className="font-bold">{ product.name }</h3>
                    <p>{ product.category }</p>
                </div>
                <div className="flex-1">
                    <p>${ product.price }</p>
                </div>
            </div>
            <div>
                <FaTimes className='text-red-600 cursor-pointer' onClick={ () => onDelete(product.id) }/>
            </div>
        </li>
    );
}

export default Product;
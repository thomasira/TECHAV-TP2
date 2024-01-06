import { FaTimes } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';

const Product = ({ product, onDelete, onUpdate }) => {
    return (
        <li className='product-card'>
            <div className='flex-1'>
                <div className='flex-1 font-bold'>
                    <h3 className='text-4xl'>{ product.name }</h3>
                    <div>
                        <p className='text-3xl'>$ { product.price }</p>
                    </div>
                </div>
                <div>
                    <p>{ product.description }</p>
                    <p>{ product.category }</p>
                </div>
            </div>

            <div>
                <button 
                    className='flex items-center btn btn-gr-red btn-sm gap-2 saturate-[.8]' 
                    onClick={ () => onDelete(product.id) }
                ><FaTimes className='text-light'/>Delete
                </button>

                <button 
                    className='flex items-center btn btn-gr-blue-200 btn-sm gap-2 saturate-[.8]'
                    onClick={ () => onUpdate(product.id) }
                ><FaRegPenToSquare className='text-light'/>Modify
                </button>
            </div>
        </li>
    );
}

export default Product;
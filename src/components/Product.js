import { FaTimes } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';

const Product = ({ product, onDelete, onUpdate }) => {
    return (
        <li className='product-card'>
            <div className='flex-1'>
                <div className='flex-1 font-bold'>
                    <h3 className='text-m'>{ product.name }</h3>
                    <div>
                        <p className='text-m'>$ { product.price }</p>
                    </div>
                </div>
                <div>
                    <p>{ product.description }</p>
                    <p className='text-main-800'>{ product.category ? product.category : 'no category'}</p>
                </div>
            </div>

            <div>
                <button 
                    className='flex items-center btn btn-gr-red btn-sm gap-2 saturate-[.8]' 
                    onClick={ () => onDelete(product.id) }
                ><FaTimes className='text-light'/>delete
                </button>

                <button 
                    className='flex items-center btn btn-gr-blue-200 btn-sm gap-2 saturate-[.8]'
                    onClick={ () => onUpdate(product.id) }
                ><FaRegPenToSquare className='text-light'/>modify
                </button>
            </div>
        </li>
    );
}

export default Product;
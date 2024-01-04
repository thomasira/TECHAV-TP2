import { FaTimes } from 'react-icons/fa';
import { FaRegPenToSquare } from "react-icons/fa6";

const Product = ({ product, onDelete, onUpdate }) => {
    return (
        <li className="bg-green-100 p-1 rounded-lg flex flex-1 flex-wrap gap-3 justify-between">
            <div className='flex flex-col flex-1'>
                <div className='flex-1 flex flex-wrap justify-between gap-3'>
                    <h3 className="font-bold flex-1 text-4xl">{ product.name }</h3>
                    <div className='self-center'>
                        <p className='font-bold text-3xl'>${ product.price }</p>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <p>{ product.description }</p>
                    <p>{ product.category }</p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <button 
                    className='flex items-center btn btn-gr-red gap-2' 
                    onClick={ () => onDelete(product.id) }
                ><FaTimes className='text-white'/>Delete
                </button>

                <button 
                    className='flex items-center btn btn-gr-green gap-2'
                    onClick={ () => onUpdate(product.id) }
                ><FaRegPenToSquare className=''/>Modify
                </button>
            </div>
        </li>
    );
}

export default Product;
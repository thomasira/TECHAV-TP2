import { FaTimes } from 'react-icons/fa';
import { FaRegPenToSquare } from "react-icons/fa6";

const Product = ({ product, onDelete, onUpdate }) => {
    return (
        <li className="w-1/2 bg-green-100 p-1 rounded-lg flex flex-1 gap-3 justify-between">
            <div>
                <div className="flex-1">
                    <h3 className="font-bold">{ product.name }</h3>
                    <p>{ product.category }</p>
                </div>
                <div className="flex-1">
                    <p>${ product.price }</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <button 
                    className='flex items-center btn btn-gr-red gap-2' 
                    onClick={ () => onDelete(product.id) }
                >
                    <FaTimes className='text-white'/>Delete
                </button>
                <button className='flex items-center btn btn-gr-green gap-2' 
                onClick={ () => onUpdate(product.id) }
                >
                    <FaRegPenToSquare className=''/>Modify
                </button>
            </div>
        </li>
    );
}

export default Product;
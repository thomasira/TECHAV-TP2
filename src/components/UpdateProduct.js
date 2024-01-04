import { FaTimes } from 'react-icons/fa';
import { FaRegPenToSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";

const UpdateProduct = ({ product, onUpdate, toggleForm }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const id = product.id;

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add a product name');
            return;
        }
        toggleForm();
        onUpdate({ name, description, price, category, id });
    }

    return (
        <form className="add-form w-1/2" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Product
                    <input
                    type='text'
                    value={ name }
                    onChange = { e => setName(e.target.value) }
                    />
                </label>
            </div>
            <div className="form-control">
                <label>Description
                    <input
                    type='text'
                    value={ description }
                    onChange = { e => setDescription(e.target.value) }
                    />
                </label>
            </div>
            <div className="form-control">
                <label>Set price
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>$</span>
                        <input className='flex-1'
                        type='number'
                        step='0.01'
                        min='0'
                        value={ price }
                        onChange = { e => setPrice(e.target.value) }
                        />
                    </div>
                   
                </label>
            </div>
            <div className="form-control">
                <label>Category
                    <select name="category" value={ category } onChange={ e => setCategory(e.target.value) }>
                        <option value="furniture">Furniture</option>
                        <option value="kitchen-tool">Kitchen tool</option>
                        <option value="car">Car</option>
                        <option value="electronic">Electronic</option>
                        <option value="book">Book</option>
                    </select>
                </label>
            </div>
            <input type="submit" className="btn btn-gr-green btn-block mt-4" value="Save product"/>
        </form>
    );
}

export default UpdateProduct;
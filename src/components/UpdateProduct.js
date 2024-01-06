import { useEffect, useState } from 'react';
import Alert from './Alert';

const UpdateProduct = ({ product, onUpdate, toggleForm }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const id = product.id;
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            setShowAlert(true);
        } else {
            onUpdate({ name, description, price, category, id });
            toggleForm();
        }
    }

    return (
        <form className='form form-gray flex-[1_1_500px] max-w-[800px]' onSubmit={ onSubmit }>
            { showAlert && <Alert text={ 'make sure product has a name'} color={ 'gray' } toggleAlert={ showAlert } />}
            <div>
                <div className='flex-1 min-w-[200px]'>
                    <div className='form-control'>
                        <label><span>Product</span>
                            <input
                            type='text'
                            value={ name }
                            onChange = { e => setName(e.target.value) }
                            />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label><span>Description</span>
                            <input
                            type='text'
                            value={ description }
                            onChange = { e => setDescription(e.target.value) }
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <div className='form-control'>
                        <label><span>Set price</span>
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
                    <div className='form-control'>
                        <label><span>Category</span>
                            <select name='category' value={ category } onChange={ e => setCategory(e.target.value) }>
                                <option value='furniture'>Furniture</option>
                                <option value='kitchen-tool'>Kitchen tool</option>
                                <option value='car'>Car</option>
                                <option value='electronic'>Electronic</option>
                                <option value='book'>Book</option>
                                <option value='food'>Food</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
                <button className='btn btn-sm btn-gr-yellow'>save product</button>
                <button className='btn btn-sm btn-gr-red' onClick={ toggleForm }>cancel</button>
            </div>
        </form>
    );
}

export default UpdateProduct;
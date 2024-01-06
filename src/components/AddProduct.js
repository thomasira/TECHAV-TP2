import { useState } from 'react';
import Alert from './Alert';

const AddProduct = ({ onAdd, toggleForm }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('00.00');
    const [category, setCategory] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            setShowAlert(true);
        } else {
            onAdd({ name, description, price, category });
            toggleForm();
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
        }
    }
    return (
        <form className='form form-blue w-full' onSubmit={ onSubmit }>
            { showAlert && <Alert text={ 'make sure product has a name' } toggleAlert={ showAlert } />}
            <div>
                <div className='flex-1 min-w-[300px]'>
                    <div className='form-control'>
                        <label><span>Product</span>
                            <input
                            type='text'
                            placeholder='Product name'
                            value={ name }
                            onChange = { e => setName(e.target.value) }
                            />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label><span>Description</span>
                            <input
                            type='text'
                            placeholder='Add description'
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
                                <span className='text-s'>$</span>
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
                            <select name='category' onChange={ e => setCategory(e.target.value) }>
                                <option>Choose a category</option>
                                <option value='furniture'>Furniture</option>
                                <option value='kitchen tool'>Kitchen tool</option>
                                <option value='car'>Car</option>
                                <option value='electronic'>Electronic</option>
                                <option value='book'>Book</option>
                                <option value='food'>Food</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <button className='btn btn-gr-yellow self-start'>save product</button>
        </form>
    )
}

export default AddProduct;
import { useState } from 'react';

const AddProduct = ({ onAdd, toggleForm }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('00.00');
    const [category, setCategory] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add a product name')
            return
        }
        onAdd({ name, description, price, category });
        toggleForm();
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
    }
    return (
        <form className='add-form w-full' onSubmit={ onSubmit }>
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
                            <select name='category' onChange={ e => setCategory(e.target.value) }>
                                <option value='furniture'>Furniture</option>
                                <option value='kitchen-tool'>Kitchen tool</option>
                                <option value='car'>Car</option>
                                <option value='electronic'>Electronic</option>
                                <option value='book'>Book</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <input type='submit' className='btn btn-gr-green btn-block mt-4' value='Save product'/>
            
<div id="alert-1" class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ms-3 text-xs text-red-400 font-medium">
    Please make sure the product has a name
    </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-red-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>

        </form>
    )
}

export default AddProduct;
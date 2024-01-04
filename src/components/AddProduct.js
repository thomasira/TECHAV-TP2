import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
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
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
    }
    return (
        <form className="add-form" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Product
                    <input
                    type='text'
                    placeholder="Product name"
                    value={ name }
                    onChange = { e => setName(e.target.value) }
                    />
                </label>
            </div>
            <div className="form-control">
                <label>Description
                    <input
                    type='text'
                    placeholder="Add description"
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
                    <select name="category" onChange={ e => setCategory(e.target.value) }>
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
    )
}

export default AddProduct;
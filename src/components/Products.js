import Header from './Header';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import { useEffect, useState } from 'react';

const Products = ({ products, onDelete, onUpdate, onAdd }) => {
    const [updateId, setUpdateId] = useState(false);
    const showUpdate = id => setUpdateId(id);
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div>
            <Header title='By & Buy' toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
            { showAdd && <AddProduct onAdd={ onAdd } toggleForm={ () => setShowAdd(!showAdd) }/> }
            <ul className='flex flex-col gap-2 container'>
                { products.map(product => (
                    product.id !== updateId ? (
                        <Product product={ product } key={ product.id } onDelete={ onDelete } onUpdate={ showUpdate }/>
                    ) : (
                        <UpdateProduct product={ product } key={ product.id } onUpdate={ onUpdate } toggleForm={ () => setUpdateId(false) }/>
                    )
                )) }
            </ul>
        </div>
    );
}

export default Products;
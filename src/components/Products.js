import Header from './Header';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([
        {
            'id': 1,
            'name': 'Yogurt',
            'description': 'greek yogurt',
            'price': 45.34,
            'category': 'food'
        },
        {
            'id': 2,
            'name': 'Sofa',
            'description': 'comfy sofa',
            'price': 2032.99,
            'category': 'furniture'
        },
        {
            'id': 3,
            'name': 'The big atlas',
            'description': 'an atlas of the world',
            'price': 43.29,
            'category': 'book'
        },
        {
            'id': 8,
            'name': 'Wok',
            'description': 'cast iron wok',
            'price': 67.99,
            'category': 'kitchen tool'
        }
    ]);

    const [updateId, setUpdateId] = useState(false);
    const showUpdate = id => setUpdateId(id);
    
    const [showAdd, setShowAdd] = useState(false);

    const addProduct = product => { 
        product.id = products[products.length - 1].id + 1;
        setProducts([...products, product]);
    }
    const updateProduct = updateProduct => {
        setProducts(products.map(product => 
            product.id === updateProduct.id ? {
                ...product, 
                name: updateProduct.name, 
                description: updateProduct.description, 
                price: updateProduct.price, 
                category: updateProduct.category 
            } : product
        ));
    }
    const deleteProduct = id => {
        setProducts(products.filter(products => products.id !== id));
    }

    return (
        <div>
            <Header title='By & Buy' toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
            { showAdd && <AddProduct onAdd={ addProduct } toggleForm={ () => setShowAdd(!showAdd) }/> }
            { products.length > 0 ? (
                <ul className='flex flex-col gap-2 container'>
                { products.map(product => (
                    product.id !== updateId ? (
                        <Product product={ product } key={ product.id } onDelete={ deleteProduct } onUpdate={ showUpdate }/>
                    ) : (
                        <UpdateProduct product={ product } key={ product.id } onUpdate={ updateProduct } toggleForm={ () => setUpdateId(false) }/>
                    )
                )) }
                </ul>
            ) : (
                <h2>No products available</h2>
            )}
        </div>
    );
}

export default Products;
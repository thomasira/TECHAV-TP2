import { useEffect, useState } from 'react';
import Products from './components/Products';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BbLogo from './components/BbLogo';

function App() {
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
        <BrowserRouter>
        <BbLogo/>
        <div className='bg-light text-dark text-text font-archivo h-screen p-3 flex flex-col items-center gap-5'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </nav>
            
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/products' element={ products.length > 0 ? (
                    <Products products={ products } onDelete={ deleteProduct } onUpdate={ updateProduct } onAdd={ addProduct }/>
                ) : (
                    <h2 className='text-light font-bold p-3 text-center text-red-500'>No product available</h2>
                )}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;

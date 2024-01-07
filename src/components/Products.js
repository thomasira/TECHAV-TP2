import Header from './Header';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import { useEffect, useState } from 'react';

const Products = () => {

    /* manage fetch of products from DB */
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        const getProducts = async () => {
          const ProductsFromServer = await fetchProducts('http://localhost:5000/Products');
          setProducts(ProductsFromServer);
        }
        getProducts();
    }, []);
    const fetchProducts = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    /* manage adding product to products DB and DOM */
    const addProduct = async product => { 
        const res = await fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
                },
            body: JSON.stringify(product)
        })
        const newProduct = await res.json() 
        setProducts([...products, newProduct]);
    }
    
    /* manage update product from products DB and DOM */
    const updateProduct = async updateProduct => {
        await fetchProducts(`http://localhost:5000/products/${ updateProduct.id }`);
        await fetch(`http://localhost:5000/products/${updateProduct.id}`,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        });
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
            
    /* manage delete product from products DB and DOM */
    const deleteProduct = async id => {
        await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        });
        setProducts(products.filter(products => products.id !== id));
    }

    /* manage toggle of update form */
    const [updateId, setUpdateId] = useState(false);
    const showUpdate = id => setUpdateId(id);
    
    /* manage toggle of add form */
    const [showAdd, setShowAdd] = useState(false);
    
    return (
        <div className='flex flex-col px-5 items-center max-w-[1200px] self-center'>
    
            <div className='py-10 flex flex-col items-center gap-5 w-full'>
                <Header toggleForm={ () => setShowAdd(!showAdd) } showAdd={ showAdd }/>
                { showAdd && <AddProduct onAdd={ addProduct } toggleForm={ () => setShowAdd(!showAdd) }/> }
                <span className='w-full h-[1px] block bg-main-600 shadow-lg shadow-dark'></span>
            </div>

            { products.length > 0 ? (
                
                <ul className='flex flex-wrap gap-5 justify-center py-4'>
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
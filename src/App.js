import Products from './components/Products';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MainNav from './components/MainNav';

function App() {

    return (
        <BrowserRouter>
            <div className='bg-light min-h-screen flex flex-col'>
                <MainNav/>
                <div className='text-dark text-text font-archivo flex flex-1 flex-col gap-5'>
                    <Routes>
                        <Route path='/' element={ <Home/> }/>
                        <Route path='/products' element={ <Products/> }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

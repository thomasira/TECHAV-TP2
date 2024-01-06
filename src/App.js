import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import MainNav from './components/MainNav';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className='bg-neutral-200 min-h-screen flex flex-col'>
                <MainNav/>
                <div className='text-dark text-text font-archivo flex flex-1 flex-col gap-5'>
                    <Routes>
                        <Route path='/' element={ <Home/> }/>
                        <Route path='/products' element={ <Products/> }/>
                        <Route path='/about' element={ <About/> }/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

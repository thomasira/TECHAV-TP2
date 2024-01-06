import { Link } from 'react-router-dom';
import BbLogo from './BbLogo';

const MainNav = () => {
    return (
        <nav className='flex flex-wrap p-2 gap-2 justify-between bg-main-600'>
            <Link to='/'><BbLogo size={ 's' } title='link to homepage'/></Link>
            <div className='flex px-2 gap-3 self-center font-medium text-text'>
                <Link to='/products' className='p-2 hover:text-comp' >products</Link>
                <Link to='/about' className='p-2 hover:text-comp'>about</Link>
            </div>
        </nav>
    );
}

export default MainNav;
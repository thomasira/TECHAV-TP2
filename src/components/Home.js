import BbLogo from "./BbLogo";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className='bg-main-600 flex-1 p-5 flex justify-center'>
        <div >
          <div>
            <h1 className='text-xl'>Welcome to <BbLogo direction={ 'horizontal' } size={ 'l' } color={ 'comp' }/></h1>
            <Link to='/products' className="btn">Come in!</Link>            
          </div>
        </div>
      </div>
    );
}

export default Home;
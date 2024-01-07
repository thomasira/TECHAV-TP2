import BbLogo from "./BbLogo";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className='bg-main-600 flex-1 p-4 py-32 flex justify-center'>
        <div>
          <div className='text-center flex flex-col items-center gap-3'>
            <h1 className='text-xl'>Welcome to <BbLogo direction={ 'horizontal' } size={ 'l' } color={ 'comp' }/></h1>
            <p className='max-w-[600px]'>At By and Buy, we care for all you needs. Come by and get all your most desired products from grills for your patio to Legos for your little imps. We've got it all, come buy, by-and-by!</p>
            <Link to='/products' className="btn btn-gr-yellow">Come in!</Link>            
          </div>
        </div>
      </div>
    );
}

export default Home;
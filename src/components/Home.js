import BbLogo from "./BbLogo";

const Home = () => {
    return (
      <div className='bg-main-600'>
        <div className='flex'>
          <div>
            <h1 className='text-xl'>Welcome to By and Buy</h1>
            <p className="text-m">Come by and enjoy all types of products!</p>
            <p className="text-text">Now and by-and-by, the place to buy for all your needs!</p>
          </div>

          <BbLogo size={ 'l' }/>
        </div>
      </div>
    );
}

export default Home;
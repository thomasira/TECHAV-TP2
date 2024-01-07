
const About = () => {
    return (
        <div className='bg-neutral-200 p-4 flex-1 flex-col flex'>
            <div className='flex flex-col gap-3 max-w-[1200px] w-full self-center'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-medium'>About</h1>
                    <a href='https://github.com/thomasIRA/TECHAV-TP2' className='text-main-900 hover:text-main-600'>Follow project on Github</a>
                </div>
                <div className='flex flex-wrap gap-6 justify-between'>
                    <div className='flex-1 min-w-[300px]'>
                        <h2 className='text-m font-medium'>What is By and Buy ?</h2>
                        <p className='max-w-[600px]'>By and Buy is a simple web project. A first time experimentation with React builds. Basic data and DOM manipulation are applied in this project, such as add, modify and delete products. All products are fictional and the data verification is not on point. The style is constructed with Tailwind Css.</p>
                    </div>
                    <div className='min-w-[300px] text-center p-2 bg-main-600 shadow-sm'>
                        <h2 className='text-m'>References</h2>
                        <ul className='text-comp-200'>
                            <li><a href="https://react.dev/learn" className='hover:text-comp-400'>React</a></li>
                            <li><a href="https://tailwindcss.com/docs/installation" className='hover:text-comp-400'>Tailwind</a></li>
                            <li><a href="https://flowbite.com/docs/getting-started/introduction/" className='hover:text-comp-400'>Flowbite</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default About;
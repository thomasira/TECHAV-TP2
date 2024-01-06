import Button from './Button';

const Header = (props) => {
    return (
        <header className='flex gap-3 justify-center'>
            <div>
                <h2 className='text-s font-bold'>Consult and modify your products</h2>
                <p className='text-xs'>You can add, update and delete your products in this section.
                <br/> Make sure to verify your information before submitting changes.</p>
            </div>
            <Button 
                onClick={ props.toggleForm } 
                text={ props.showAdd ? 'close' : 'add product' }
                color={ props.showAdd ? 'btn-gr-red' : 'btn-gr-blue' }
            />
        </header>
    );
}

export default Header;
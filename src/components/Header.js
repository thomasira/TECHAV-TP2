import Button from "./Button";

const Header = (props) => {
    return (
        <header className="container bg-white p-2">
            <h1 className="uppercase text-xl font-bold">{ props.title }</h1>
            <Button text={ props.showAdd ? 'close' : 'add product' } onClick={ props.toggleForm } color={ props.showAdd ? 'btn-gr-red' : 'btn-gr-blue' }/>
        </header>
    );
}

export default Header;
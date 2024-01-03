import Button
 from "./Button";
const Header = (props) => {
    return (
        <header className="container bg-white p-2">
            <h1 className="uppercase text-xl font-bold">{ props.title }</h1>
            <Button text="Add Product"/>
        </header>
    );
}
export default Header;
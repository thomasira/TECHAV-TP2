
const Button = (props) => {
    return (
        <button className={`${ props.color } btn`} onClick={ props.onClick }>{ props.text }</button>
    );
}
Button.defaultProps = {
    color: 'btn-gr-blue'
}

export default Button;
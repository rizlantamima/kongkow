export default function StdButton(props){
    const { onClick, children, className, disabled } = props
  
    return (
      <button
        disabled={disabled}
        type="button"
        className={(className !== "" && className !== "undefined") ? "btn-primary".concat(" ", className) : "btn-primary"}
        onClick={onClick}>
        {children}
      </button>
    );
}
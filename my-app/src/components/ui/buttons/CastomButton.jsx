import "./button.css";
const CastomButton = (props) => {
  const { children, value, className, ...rest } = props;
  return (
    <button
      className={`castom-button ${className} || ""`}
      value={value}
      {...rest}
    >
      {children}
    </button>
  );
};
export default CastomButton;

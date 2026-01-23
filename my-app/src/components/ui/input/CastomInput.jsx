import "./input.css";
const CastomInput = (props) => {
  const { type = "text", placeholder, value, className, ...rest } = props;
  return (
    <input
      className={`castom-input ${className} || ""`}
      type={type}
      placeholder={placeholder}
      value={value}
      {...rest}
    />
  );
};
export default CastomInput;

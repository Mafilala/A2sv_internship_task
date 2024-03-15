const Button = ({ color, name }) => {
  console.log(color, name);
  return (
    <button
      style={{ borderColor: color }}
      className="text-red rounded-[80px] text-[14px] pl-[8px] pr-[8px] pb-[6px] pt-[6px] font-semibold bg-opacity-5 border"
    >
      {name}
    </button>
  );
};
export default Button;

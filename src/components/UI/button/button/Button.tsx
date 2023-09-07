const Button = (props: any) => {
  //   const classes = props.className + " " + "bg-[#64CCC5] p-3 rounded-3xl w-52";

  return (
    <button
      className="bg-[#64CCC5] p-3 rounded-3xl w-52 cursor-pointer text-white font-bold hover:bg-[#4682A9]"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;

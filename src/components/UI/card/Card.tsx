const Card = (props: any) => {
  const classes =
    props.className + " bg-[#91C8E4]  text-[#EEEEEE] rounded-3xl p-4 shadow-md";

  return <div className={classes}>{props.children}</div>;
};

export default Card;

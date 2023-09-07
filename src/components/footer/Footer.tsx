const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-28 bg-[#4682A9] flex justify-around items-center relative z-10 text-[#EEEEEE] font-bold">
      <p>Munich, {year}</p>
    </footer>
  );
};

export default Footer;

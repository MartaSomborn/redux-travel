// import MenuIcon from "@mui/icons-material/Menu";
import LogoSVG from "../../assets/travelLogo.svg";
import HeaderMenuButton from "./HeaderMenuButton";
import MainVideo from "./MainVideo";

const Header = () => {
  return (
    <>
      <header className="h-28 bg-[#4682A9] flex justify-around items-center relative z-10">
        <div>
          <div className="absolute top-8 left-5.5 leading-7">
            <img className="h-12" src={LogoSVG} alt="Company logo - earth" />
          </div>
        </div>
        <HeaderMenuButton />
      </header>
      <MainVideo />
    </>
  );
};

export default Header;

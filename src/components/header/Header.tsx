// import MenuIcon from "@mui/icons-material/Menu";

import TemporaryDrawer from "./TemporaryDrawer";
import Logo from "../../assets/travelLogo.png";
import LogoSVG from "../../assets/travelLogo.svg";

const Header = () => {
  return (
    <div className="h-28 bg-[#96B6C5] flex justify-around items-center relative">
      <div>
        <div className="absolute top-8 left-5.5 leading-7">
          <img className="h-12" src={LogoSVG} />
        </div>
      </div>
      <div>
        <TemporaryDrawer />
      </div>
      <ul className="flex gap-12 max-md:hidden text-white font-bold">
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Dream Destinations</a>
        </li>
        <li>
          <a>Your magical Holiday</a>
        </li>
        <li>
          <a>Reviews</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

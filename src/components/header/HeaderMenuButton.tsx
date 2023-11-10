import TemporaryDrawer from "./TemporaryDrawer";
import { Link } from "react-scroll";

const HeaderMenuButton = () => {
  //<li><Link to="header" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
  return (
    <div>
      <div>
        <TemporaryDrawer />
      </div>
      <ul className="flex gap-12 max-md:hidden text-[#EEEEEE] font-bold">
        <li className="cursor-pointer">
          <Link
            to="main-video"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>About Us</a>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="dream-destination"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>Dream Destinations</a>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            to="magical-holiday"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>Your magical Holiday</a>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="review" spy={true} smooth={true} offset={50} duration={500}>
            <a>Reviews</a>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
            <a>FAQ</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuButton;

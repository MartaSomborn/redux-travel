import TemporaryDrawer from "./TemporaryDrawer";

const HeaderMenuButton = () => {
  return (
    <div>
      <div>
        <TemporaryDrawer />
      </div>
      <ul className="flex gap-12 max-md:hidden text-white font-bold">
        <li className="cursor-pointer">
          <a>About Us</a>
        </li>
        <li className="cursor-pointer">
          <a>Dream Destinations</a>
        </li>
        <li className="cursor-pointer">
          <a>Your magical Holiday</a>
        </li>
        <li className="cursor-pointer">
          <a>Reviews</a>
        </li>
        <li className="cursor-pointer">
          <a>FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuButton;

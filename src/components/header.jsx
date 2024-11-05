import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src={Logo} alt="logo" className="h-24" />
        </Link>
        <Button variant="outline">Login</Button>
      </nav>
    </>
  );
};

export default Header;

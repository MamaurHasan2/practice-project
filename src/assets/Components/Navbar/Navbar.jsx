import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Portfolio", path: "/portfolio" },
  ];
  return (
    <>
      <nav>
        <div
          className="md:hidden text-2xl bg-yellow-300 text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosCloseCircle /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex bg-yellow-300 duration-1000 absolute ${
            open ? "top-24" : "-top-52"
          }  md:static`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

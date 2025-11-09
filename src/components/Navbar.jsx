import { Link, useLocation } from "react-router-dom"; //we tell react that we will use a component from react-router-dom library

export default function Navbar() { //we declare a compoent named Navbar
  const { pathname } = useLocation(); //identify on which page we are currently on

  const linkStyle = (path) => //we create a function that decide what style the link will have
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path //if we are on that page, the butto will be blue, if not, will be normal
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 hover:text-black"
    }`;

    //nav className - create a nav bar and we style it in Tailwid
    // <Link className={linkStyle("/")} to="/">List</Link> create a link towards / with dyamc style
  return (
    <nav className="flex gap-2 border-b pb-3 mb-6"> 
      <Link className={linkStyle("/")} to="/">List</Link>
      <Link className={linkStyle("/new")} to="/new">New</Link>
      <Link className={linkStyle("/about")} to="/about">About</Link>
    </nav>
  );
}





import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 hover:text-black"
    }`;

  return (
    <nav className="flex gap-2 border-b pb-3 mb-6">
      <Link className={linkStyle("/")} to="/">List</Link>
      <Link className={linkStyle("/new")} to="/new">New</Link>
    </nav>
  );
}

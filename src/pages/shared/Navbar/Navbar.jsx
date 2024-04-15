import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextApi/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Logo from "../../../components/Logo/Logo";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.info("Logout success!!"))
      .catch((error) => console.error(error));
  };

  const links = (
    <div className="flex gap-1">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Update Profile</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/bookmark">Bookmark</NavLink>
        </li>
      )}
    </div>
  );

  return (
    <div className="shadow-lg">
      <div className="container mx-auto px-4 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full border-2 p-1 cursor-pointer border-blue-300"
                src={user.photoURL || "null"}
                alt={user.displayName || "null"}
                title={user.displayName || "null"}
              />
              <button
                className="btn bg-primary border-transparent hover:bg-primary text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-primary border-transparent hover:bg-primary text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contextApi/AuthProvider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logout Success!!"))
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
    </div>
  );

  return (
    <div className="bg-slate-300">
      <Helmet>
        <title>404 Not Found || FILA 2029 </title>
      </Helmet>
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
          <Link to="/" className="text-xl cursor-pointer">
            <div className="bg-gray-600 py-1 px-2 rounded-md text-slate-200 flex justify-center items-center gap-1">
              <h1 className="text-4xl font-bold">FILA</h1>
              <p className="text-2xl text-green-200 font-bold">2029</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button className="btn" onClick={handleLogOut}>Logout</button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

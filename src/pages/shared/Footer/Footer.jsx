import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

function Footer() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.info("Logout success!!"))
      .catch((error) => console.error(error));
  };

  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between items-center flex-col gap-8">
        <Logo />
        <nav className="space-x-4">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>
          <Link to="/profile" className="hover:text-green-400">
            Profile
          </Link>
          {user ? (
            <button onClick={handleLogOut} className="hover:text-green-400">
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-green-400">
              Login
            </Link>
          )}
        </nav>
        <hr className="border-gray-600 w-full border-t" />
        <div>
          <p className="text-sm pb-2">
            &copy; {new Date().getFullYear()} ACME Industries Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

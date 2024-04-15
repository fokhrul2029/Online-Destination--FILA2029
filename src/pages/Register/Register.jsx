import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";

/* eslint-disable react/no-unescaped-entities */
function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const validation = (name, email, photo, password) => {
    if (name.length < 6) {
      toast.error("Invalid name!");
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Invalid email!");
      return false;
    }
    if (photo.length < 6) {
      toast.error("Invalid photo URL!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password should be 6 characters or longer");
      return false;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must include at least one uppercase letter");
      return false;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must include at least one lowercase letter");
      return false;
    }

    return true;
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    if (!validation(name, email, photo, password)) {
      return;
    }
    console.log(name, email, photo, password);
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, password);
        toast.success("Registration Success!");
      })
      .catch(() => {
        toast.error("Registration failed, Something went wrong!");
      });
  };

  return (
    <div className="hero py-20">
      <Helmet>
        <title>Register || FILA 2029</title>
      </Helmet>
      <div className="card md:w-[450px] shadow-2xl bg-base-500">
        <form onSubmit={handleRegisterForm} className="card-body">
          <h1 className="text-center text-3xl font-semibold text-gray-600 pb-2">
            Register Form
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={show ? "password" : "text"}
                placeholder="password"
                className="input input-bordered w-full"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl cursor-pointer bg-white pl-3"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex flex-col space-y-1 mt-2">
              <div
                className={`flex gap-2 items-center ${
                  password.length < 6 ? "text-gray-500" : "text-green-500"
                }`}
              >
                <GrValidate />
                <span className=" text-sm">
                  "Password should be 6 characters or longer"
                </span>
              </div>
              <div
                className={`flex gap-2 items-center ${
                  !/[A-Z]/.test(password) ? "text-gray-500" : "text-green-500"
                }`}
              >
                {" "}
                <GrValidate />
                <span className="text-sm">
                  "Must include at least one uppercase letter"
                </span>
              </div>
              <div
                className={`flex gap-2 items-center ${
                  !/[a-z]/.test(password) ? "text-gray-500" : "text-green-500"
                }`}
              >
                {" "}
                <GrValidate />
                <span className="text-sm">
                  "Must include at least one lowercase letter"
                </span>
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary border-transparent hover:bg-primary text-white">
              Register
            </button>
          </div>
          <p>
            I have an account.{" "}
            <Link className="btn-link text-primary" to="/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

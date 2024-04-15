/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log(res.use);
        toast.success("Login Success.");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login failed, Email or password doesn't incorrect!");
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Success.");
        navigate("/");
      })
      .catch(() => {
        toast.error("Login failed, Something went wrong!!");
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Login Success.");
        navigate("/");
      })
      .catch(() => {
        toast.error("Login failed, Something went wrong!!");
      });
  };

  return (
    <div className="hero py-20">
      <Helmet>
        <title>Login || FILA 2029</title>
      </Helmet>
      <div className="card md:w-[450px] shadow-2xl bg-base-500">
        <form onSubmit={handleLoginForm} className="card-body">
          <h1 className="text-center text-3xl font-semibold text-gray-600 pb-2">
            Login Form
          </h1>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary border-transparent hover:bg-primary text-white">
              Login
            </button>
          </div>
          <div className="flex gap-4 justify-around items-center py-4">
            <div onClick={handleGoogleSignIn} className="btn">
              <FaGoogle />
            </div>
            <div onClick={handleGithubSignIn} className="btn">
              {" "}
              <FaGithub />{" "}
            </div>
            <div className="btn">
              {" "}
              <FaFacebook />{" "}
            </div>
          </div>
          <p>
            I don't have account.{" "}
            <Link className="btn-link text-primary" to="/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

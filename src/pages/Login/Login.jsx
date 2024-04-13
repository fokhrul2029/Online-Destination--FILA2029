/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider/AuthProvider"; 

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const authInfo = useContext(AuthContext)
  console.log(authInfo)

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(email, password);
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
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="flex gap-4 justify-around items-center py-4">
            <div className="btn">
              <FaGoogle />
            </div>
            <div className="btn">
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
            <Link className="btn-link" to="/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

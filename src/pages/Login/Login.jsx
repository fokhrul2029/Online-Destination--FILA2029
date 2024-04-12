/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="hero py-20"> 
        <div className="card md:w-[450px] shadow-2xl bg-base-500">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
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
            <p>
              I don't have account. <Link className="btn-link" to="/register">Register Now</Link>
            </p>
          </form>
        </div>
      </div> 
  );
}

export default Login;

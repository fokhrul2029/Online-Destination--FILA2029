import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Register() {
  return (
    <div className="hero py-20">
      <Helmet>
        <title>Register || FILA 2029</title>
      </Helmet>
      <div className="card md:w-[450px] shadow-2xl bg-base-500">
        <form className="card-body">
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            I have an account.{" "}
            <Link className="btn-link" to="/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

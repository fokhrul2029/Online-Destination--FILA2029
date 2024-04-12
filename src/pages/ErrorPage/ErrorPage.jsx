/* eslint-disable react/no-unescaped-entities */
 
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="p-8 bg-gray-800 shadow-lg rounded-lg text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">404</h2>
        <p className="text-lg mb-6">Oops! Page not found.</p> 
        <p className="text-lg mb-6">Let's get you back on track!</p>
        <Link
          to="/"
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

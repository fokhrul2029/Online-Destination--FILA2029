import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="text-xl cursor-pointer">
      <div className="bg-primary py-1 px-2 rounded-md text-slate-200 flex justify-center items-center gap-1">
        <h1 className="text-4xl font-bold">FILA</h1>
        <p className="text-2xl text-green-300 font-bold">2029</p>
      </div>
    </Link>
  );
}

export default Logo;

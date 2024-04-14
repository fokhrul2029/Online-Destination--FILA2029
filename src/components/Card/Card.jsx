import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ data }) {
  const navigate = useNavigate();
  const { id, image, estate_title, description, location, status } =
    data;

  const handleDetailsButton = (id) => {
    navigate(`estateDetails/${id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body px-5">
        {" "}
        <h2 className="card-title font-bold">{estate_title}</h2>
        <p className="text-lg font-medium text-gray-400">{description}</p> 
        <div className="flex w-fit gap-2 items-center flex-wrap">
          <p className="font-bold">Location: </p>
          <p>{location}</p>
        </div>
        <div className="flex w-fit gap-2 items-center">
          <p className="font-bold">Status: </p>
          <p className="font-semibold text-green-600">{status}</p>
        </div>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={() => handleDetailsButton(id)}
            className="btn btn-primary w-full"
          >
            View Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

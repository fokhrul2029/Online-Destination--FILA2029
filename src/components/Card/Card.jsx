import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ data }) {
  const navigate = useNavigate();
  const { id, image, estate_title, description } = data;

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
        <h2 className="card-title">{estate_title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDetailsButton(id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

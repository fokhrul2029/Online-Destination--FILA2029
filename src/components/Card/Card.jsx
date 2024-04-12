/* eslint-disable react/prop-types */
function Card({data}) {

    const {image } = data 

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-48 w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-5">
        {" "}
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

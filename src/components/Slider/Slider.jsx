/* eslint-disable react/prop-types */
function Slider({ data }) {
  const { image, estate_title, description } = data;
  return (
    <div className="flex gap-5 justify-around py-40 border items-center px-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">{estate_title}</h1>
        <p>{description}</p>
      </div>
      <div className="w-1/3">
        <img className="rounded-2xl" src={image} alt="" />
      </div>
    </div>
  );
}

export default Slider;

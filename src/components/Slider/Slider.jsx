/* eslint-disable react/prop-types */
function Slider({ data }) {
  const { image, estate_title, description } = data;
  return (
    <div className="flex gap-5 justify-around py-10 items-center">
      <div className="relative overflow-hidden w-full bg-black rounded-xl">
        <img
          src={image}
          alt={estate_title}
          className="w-full md:h-[300px] lg:h-[500px] opacity-[.8] "
        />
        <div className="absolute inset-0 opacity-30"></div>
        <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-white text-4xl font-bold text-center animate__animated animate__backInUp">
            {estate_title}
          </h1>
          <p className="text-gray-300 font-medium text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;

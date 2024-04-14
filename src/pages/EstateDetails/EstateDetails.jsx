import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function EstateDetails() {
  const paramsId = useParams();
  const uniqId = parseInt(paramsId.id);
  const data = useLoaderData();
  const navigate = useNavigate()

  const itemDetails = data.find((item) => item.id === uniqId);

  const {
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = itemDetails;

  return (
    <div className="py-20 container mx-auto px-4">
      <Helmet>
        <title>{estate_title} || FILA 2029</title>
      </Helmet>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={estate_title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <h1 className="text-white text-3xl font-bold text-center">
                    {estate_title}
                  </h1>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{segment_name}</h2>
                <p className="text-lg mb-4">{description}</p>
                <div className="mb-4">
                  <p>
                    <span className="font-bold">Price:</span> ${price}
                  </p>
                  <p>
                    <span className="font-bold">Status:</span> {status}
                  </p>
                  <p>
                    <span className="font-bold">Area:</span> {area} sq ft
                  </p>
                  <p>
                    <span className="font-bold">Location:</span> {location}
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Facilities:</h3>
                  <ul className="list-disc pl-5">
                    {facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => navigate(-1) } className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstateDetails;

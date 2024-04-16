/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getData, saveData } from "../../utility/localStorage";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";

function EstateDetails() {
  const paramsId = useParams();
  const uniqId = parseInt(paramsId.id);
  const data = useLoaderData();
  const navigate = useNavigate();
  const [exists, setExist] = useState(false);

  const itemDetails = data.find((item) => item.id === uniqId);

  const {
    id,
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

  useEffect(() => {
    const storageData = getData();
    const exists = storageData.find((item) => item == id);
    setExist(exists);
  }, []);

  const handleSaveData = (id) => {
    console.log(id);
    saveData(id);
    setExist(!exists);
    toast.success("Data added success!");
  };
  const handleRemoveData = (id) => {
    const storageData = getData();
    const updatedData = storageData.filter((item) => item !== id);
    localStorage.setItem("FILA-2029--bookmarks", JSON.stringify(updatedData));
    setExist(!exists);
    toast("Data Successfully Removed!");
  };

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
                  <h1 className="text-white text-3xl font-bold text-center animate__animated animate__swing">
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
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate("/")}
                    className="btn bg-primary border-transparent hover:bg-primary text-white"
                  >
                    Back to Home
                  </button>
                  {exists ? (
                    <button
                      className="btn bg-orange-800 border-transparent hover:bg-orange-700 text-white"
                      onClick={() => handleRemoveData(id)}
                    >
                      Remove from Bookmark
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSaveData(id)}
                      className="btn bg-green-700 border-transparent hover:bg-green-600 text-white"
                    >
                      Save to Bookmark
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstateDetails;

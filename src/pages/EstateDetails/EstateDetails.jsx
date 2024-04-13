import { useLoaderData, useParams } from "react-router-dom";

function EstateDetails() {
  const paramsId = useParams();
  const uniqId = parseInt(paramsId.id);
  const data = useLoaderData();

  const itemDetails = data.find((item) => item.id === uniqId);

  const { estate_title, image } = itemDetails;

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="flex justify-around items-center">
        <div>
          <h1>{estate_title}</h1>
        </div>
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EstateDetails;

import { useLoaderData } from "react-router-dom";
import Card from "../../../components/Card/Card";

function Estate() {
  const data = useLoaderData();
  return (
    <div className="py-20">
      <h1 className="text-5xl font-semibold text-center">
        <span className="px-10 border-b-4">Estate</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Estate;

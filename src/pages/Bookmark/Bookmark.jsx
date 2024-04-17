import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../../utility/localStorage";
import Card from "../../components/Card/Card";

function Bookmark() {
  const data = useLoaderData();

  const storedData = getData();

  const bookmarkedData = data.filter((item) => storedData.includes(item.id));
  console.log(bookmarkedData);
  return (
    <div className="py-14">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 flex items-center justify-center rounded-xl py-14">
          <h1 className="text-4xl font-bold text-gray-600">Bookmarked Items</h1>
        </div>
        <div className="mt-14 border-t-2 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            { bookmarkedData.length > 0 ? (
              bookmarkedData.map((item, i) => <Card key={i} data={item} />)
            ) : (
              <h1  className="text-2xl text-red-600 py-4 ">No Data Available! <Link className="text-lg text-primary link ml-2" to="/">Back to home</Link> </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;

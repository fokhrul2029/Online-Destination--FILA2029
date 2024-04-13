// import { Helmet } from "react-helmet";
import Banner from "../shared/Banner/Banner";
import Estate from "../shared/Estate/Estate";

function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Banner />
      <Estate />
    </div>
  );
}

export default Home;

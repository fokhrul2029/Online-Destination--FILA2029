import { useLoaderData } from "react-router-dom";

function Banner() {
    const data = useLoaderData()
    console.log(data)
  return (
    <>
      <div>This Banner will Contain a number of Slider.</div>
    </>
  );
}

export default Banner;

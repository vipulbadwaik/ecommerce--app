import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import { Car } from "lucide-react";

const Browse = () => {
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchdataurl = await fetch("https://fakestoreapi.com/products");

    const data = await fetchdataurl.json();

    setFullData(data);
  };

  //console.log(fullData);
  return (
    <div className="h-full w-full scroll-smooth">
      <Header />
      <div className=" bg-black h-16 w-full fixed lg:top-[79px] ">
         <option>
          
         </option>
      </div>
      {fullData ? (
        <div className="lg:mt-36 grid lg:grid-cols-4 ml-28 gap-y-16 ">
         
          {fullData.map((item) => {
            console.log(item);
            return <Card item={item} />;
          })}
        </div>
      ) : (
        <div className="pt-24">
          <h1 className="text-3xl">Something went wrong!!!!</h1>
        </div>
      )}
    </div>
  );
};

export default Browse;

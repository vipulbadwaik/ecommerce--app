import React, { useEffect, useState } from "react";
import Header from "./Header";

const Browse = () => {

  const [fullData, setFullData] = useState([]);

  useEffect(()=>{
       fetchData();
  },[])

  const fetchData = async() =>{
      const fetchdataurl = await fetch('https://fakestoreapi.com/products');

      const data = await fetchdataurl.json();

      setFullData(data);


  }

 console.log(fullData);
  return (
    <div className="">
      <Header/>
      {/* <div className="grid lg:grid-cols-4 ">
        {
          [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                   <div className="h-36 w-36 bg-red-600">

                    </div>
          ))
        }
      </div> */}
    </div>
  );
};

export default Browse;

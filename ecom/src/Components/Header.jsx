import React from "react";
import { NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:w-full h-20 bg-purple-600 flex justify-between text-white lg:items-center lg:fixed lg:top-0 lg:left-0">
      {/* <img className="h-20" src="https://static.vecteezy.com/system/resources/previews/020/662/330/non_2x/store-icon-logo-illustration-vector.jpg"></img> */}
      <h1 className="lg:ml-9 font-bold text-2xl  ">ShopaWorld</h1>
      <div className="flex lg:mr-6 lg:space-x-6 cursor-pointer">
       
      <h1 className="font-semibold lg:text-lg lg:p-2">Contact</h1>
        
        <h1 className="font-semibold lg:text-lg lg:p-2">About</h1>
        <h1 className="font-semibold lg:text-lg lg:p-2">Profile</h1>
        <h1 className="font-semibold lg:text-lg lg:p-2">
          <Link to={"/cart"}>
          Cart
          </Link>
          </h1>
      </div>
    </div>

//     <div className="flex justify-around bg-gray-800 text-white p-4">
//     <div className="relative group">
//       <button className="px-4 py-2">Menu 1</button>
//       <div className="absolute hidden group-hover:block bg-gray-700 text-sm text-white shadow-lg rounded">
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 1</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 2</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 3</a>
//       </div>
//     </div>
//     <div className="relative group">
//       <button className="px-4 py-2">Menu 2</button>
//       <div className="absolute hidden group-hover:block bg-gray-700 text-sm group-hover:lg:w-44 text-white shadow-lg rounded">
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 1</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 2</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 3</a>
//       </div>
//     </div>
//     <div className="relative group">
//       <button className="px-4 py-2">Menu 3</button>
//       <div className="absolute hidden group-hover:block bg-gray-700 text-sm text-white shadow-lg rounded">
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 1</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 2</a>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 3</a>
//       </div>
//     </div>
//   </div>
  );
};

export default Header;

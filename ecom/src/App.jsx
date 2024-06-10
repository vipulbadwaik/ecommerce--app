import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./Components/login";
import Browse from "./Components/browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="w-full h-screen">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

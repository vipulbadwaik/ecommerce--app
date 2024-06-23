import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./Components/login";
import Browse from "./Components/browse";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Components/Cart";

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
    {
      path: "/cart",
      element: <Cart/>,
    },
  ]);

  return (
    <Provider store={appStore}>

    <div className="w-full h-screen">
      <RouterProvider router={appRouter}>
        <Outlet/>
      </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;

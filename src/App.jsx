import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LogIn } from "./pages/LogIn";
import { SignIn } from "./pages/SignIn";
import Loader from "./pages/Loader";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LogIn />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/loader",
        element: <Loader />
      },
      {
        path: "/home",
        element: <Home />
      }
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import { SignIn } from "./components/SignIn";
import Home from "./components/Home";

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

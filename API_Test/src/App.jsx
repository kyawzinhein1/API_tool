import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import ReqForm from "./pages/ReqForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/request",
      element: <ReqForm />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import GameDetailPage from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/games/:slug", element: <GameDetailPage /> }, // This can be used to render the Home component for /games path as well
    ],
  },
]);
export default router;
// This code sets up a React Router with a single route that renders the App component at the root path ("/").
// The App component has a child route that renders the Home component when the user navigates to the root path.
// The `createBrowserRouter` function is used to create a router instance that can be used in a React application.
// The `index: true` property indicates that this is the default route for the parent path ("/").

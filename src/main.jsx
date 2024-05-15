import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import Cart from "./pages/Cart.jsx";
import Shimmer from "./components/Shimmer.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import SearchPage from "./pages/SearchPage.jsx";

const About = lazy(() => import("./pages/About.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

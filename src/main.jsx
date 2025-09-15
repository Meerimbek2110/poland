import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { mypoland } from "./Router";
import { store } from "./components/redux/Store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={mypoland} />
  </Provider>
);

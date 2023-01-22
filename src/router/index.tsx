import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "pages/counter";
import Contacts from "pages/contacts";
import Error from "pages/error";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/contacts/",
    element: <Contacts />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;

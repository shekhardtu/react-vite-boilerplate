import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "pages/counter";
import Contacts from "pages/contacts";
import Error from "pages/error";
import App from "@/App";
import Card from "@/pages/contacts/card/card.component";
import {
  loader as contactLoader,
  action as contactAction,
} from "pages/contacts/contacts.page";

import { loader as cardLoader } from "pages/contacts/card/card.component";

import ContactEditComponent, {
  action as editAction,
} from "pages/contacts/edit/";

import ContactCardComponent from "pages/contacts/card";

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
    path: "/contacts",
    element: <Contacts />,
    loader: contactLoader,
    action: contactAction,
    errorElement: <Error />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <ContactCardComponent />,
        loader: cardLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <ContactEditComponent />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

export default router;

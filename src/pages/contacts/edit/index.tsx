import React from "react";
import { ContactEdit } from "./edit.component";

const ContactEditComponent = () => {
  return (
    <div>
      <ContactEdit />
    </div>
  );
};

export { action } from "./edit.methods";
export default ContactEditComponent;

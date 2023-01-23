import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contacts.methods";

export async function action({ request, params }: any) {
  const formData = await request.formData();
  const updates: any = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

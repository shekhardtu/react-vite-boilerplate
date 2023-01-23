import { useRouteError } from "react-router-dom";

import "./error.modules.css";

interface Ierror {
  data: string;
  error: string;
  internal: boolean;
  status: number;
  statusText?: string;
  message?: string;
}
export function ErrorPage() {
  const error: Ierror | any = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="bg-white">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

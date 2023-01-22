import { useState } from "react";

import "./App.css";

import { Button } from "@mui/material";
import Counter from "./pages/counter";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-[60%] mx-auto">
        <div className="">
          <div className="">
            Create your job pages within fraction of minutes
          </div>
          <div className="">
            Now you can create your jobs using our open source job description
            creator. Post on social media, create pdf and share short links with
            your candidates, that too absolutely FREE.
          </div>
          <div className="">
            <Button size="large" />
          </div>
        </div>
        <div className="">
          <div className="">
            <Counter />
          </div>
        </div>
        <div className="">
          <nav>
            <ul>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;

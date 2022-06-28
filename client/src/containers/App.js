import { useNavigate, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Comic from "./ComicDetails";
import Comics from "./Comics";
import FavsComics from "../components/FavsComics";

function App() {
  const [comics, setComics] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favsComics = useSelector((state) => state.favsComics);

  useEffect(() => {
    axios("/comics").then(({ data }) => setComics(data));
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/favs"
        element={
          <FavsComics
            favsComics={favsComics}
            dispatch={dispatch}
            navigate={navigate}
          />
        }
      />
      <Route
        exact
        path="/"
        element={
          <Comics
            comics={comics}
            favsComics={favsComics}
            dispatch={dispatch}
            navigate={navigate}
          />
        }
      />
      <Route path="/comics/:id" element={<Comic navigate={navigate} />} />
    </Routes>
  );
}

export default App;

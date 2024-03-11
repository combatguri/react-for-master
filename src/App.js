import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from "./routes/PageHome";
import PageCoin from "./routes/PageCoin";
import PageMovie from "./routes/PageMovie";
import PageMovieDetail from "./routes/PageMovieDetail";

function App() {
  const [appType, setAppType] = useState("");

  const userApps = ["coin", "movie"];

  const handleChangeSelect = (e) => {
    setAppType(e.target.value);
  };

  useEffect(() => {
    setAppType("movie");
  }, []);

  return (
    <div>
      <p>{appType}</p>
      <select onChange={handleChangeSelect}>
        <option value={null}>Select Your App</option>
        {userApps.map((userApp, index) => (
          <option key={index} value={userApp}>
            {userApp}
          </option>
        ))}
      </select>
      <hr />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact={true}
            element={<PageHome />}
          />
          <Route path="/coin" element={<PageCoin />} />
          <Route path="/movie" element={<PageMovie />} />
          <Route path="/movie/detail/:id" element={<PageMovieDetail />} />
        </Routes>
      </BrowserRouter>

      {/* {appType === "coin" ? <CoinContainer /> : null}
      {appType === "movie" ? <MovieContainer /> : null} */}
    </div>
  );
}

export default App;

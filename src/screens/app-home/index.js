import React, { useMemo } from "react";
import NavBar from "../../layouts/navbar";
import { SearchURLContext } from "../../contexts";

const AppHome = () => {
  const searchURL = useMemo(() => ({ searchUrl: "products" }), []);
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={searchURL}>
        <NavBar />
      </SearchURLContext.Provider>
      <main></main>
    </React.Fragment>
  );
};

export default AppHome;

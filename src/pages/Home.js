import React from "react";
import { MainCont } from "../styled-components/reusables";
import { SearchBar, SearchBtn } from "./../styled-components/form";

const Home = () => {
  return (
    <MainCont>
      <h1>Home page</h1>
      <SearchBar placeholder="..." />
      <SearchBtn>Search</SearchBtn>
    </MainCont>
  );
};

export default Home;

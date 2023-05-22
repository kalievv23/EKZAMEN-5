import React, { useContext } from "react";
import Header from "./layouts/Header";
import styled from "styled-components";
import Main from "./layouts/Main";
import { Context } from "./store/ContextProvider";
import OpenShopp from "./openShopp/OpenShopp";

function CreateShopp() {
  const context = useContext(Context);
  return (
    <>
      {!context.isLoading && <OpenShopp />}
      {context.isLoading && (
        <GlobalContainer>
          <Header />
          <Main />
        </GlobalContainer>
      )}
    </>
  );
}

export default CreateShopp;

const GlobalContainer = styled.div``;

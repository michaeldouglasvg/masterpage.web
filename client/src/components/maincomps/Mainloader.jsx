import React from 'react';
import { MainLoaderGlobal, LoaderSubGlobal } from "../styled/Mainloader.styled"
import ReactLoading from "react-loading"

const Mainloader = () => {
  return (
    <MainLoaderGlobal>
     <LoaderSubGlobal>
      <h2>Welcome to <span>Gtech~Amour.com</span></h2>
      <ReactLoading
        type="spinningBubbles"
        color="#ffff"
        height={100}
        width={50}
      />
      <p>Loading...</p>
     </LoaderSubGlobal>
    </MainLoaderGlobal>
  );
}

export default Mainloader;

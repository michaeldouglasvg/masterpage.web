import React from 'react';
import { SubLoaderGlobal } from "../styled/Subloader.styled"
import ReactLoading from "react-loading"

const Subloader = () => {
  return (
    <SubLoaderGlobal>
      <ReactLoading
        className='Loader'
        type="cylon"
        color="skyblue"
        height={50}
        width={50}
      />
    </SubLoaderGlobal>
  );
}

export default Subloader;

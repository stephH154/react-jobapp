import React from "react";
import Cliploader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  const overide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <Cliploader
      color="#433fca"
      loading={loading}
      cssOverride={overide}
      size={150}
    />
  );
};

export default Spinner;

import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen px-2 pt-8 md:pb-8">
      {children}
    </div>
  );
};

export default Wrapper;

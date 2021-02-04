import React from "react";

const SayHiFunction = ({ name }) => {
  const handleClick = () => {
    setTimeout(showAlert, 4000);
  };

  const showAlert = () => {
    alert(`Hello ${name}!`);
  };

  return (
    <div>
      <button onClick={handleClick}>Say Hi with Function</button>
    </div>
  );
};

export default SayHiFunction;

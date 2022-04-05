import React from "react";

export const Button = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Есть контакт');
  }

  return (
    <button className="button primary" onClick={handleSubmit}>
    Create Post
    </button>
  );
};

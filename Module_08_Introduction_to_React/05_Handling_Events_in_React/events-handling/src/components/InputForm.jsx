import React, { useState } from "react";

function InputForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Enter your name" />
      <p>
        You typed: <b>{value}</b>
      </p>
    </div>
  );
}

export default InputForm;

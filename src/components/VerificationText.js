import React, { useState, useEffect } from "react";

export default function VerificationText({ item }) {
  const [resultValid, setResultValid] = useState("");

  useEffect(() => validationСheck(item), [item]);

  const validationСheck = (item) => {
    if (+item > 0 && +item < 21) {
      setResultValid("id-valid");
    } else setResultValid("id-invalid");
  };

  return <span className={resultValid}>{item}</span>;
}

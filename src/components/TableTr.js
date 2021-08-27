import React, { useState, useEffect } from "react";

export default function TableTr({ text }) {
  const [quantityWords, setQuantityWords] = useState("");
  const [quantityVowels, setQuantityVowels] = useState("");
  const [lineText] = useState(text);

  useEffect(() => setQuantityWords(text.split(" ").length), [text]);

  useEffect(() => setQuantityVowels(findVowels(text)), [text]);

  const findVowels = (str) => {
    const matched = str.match(/[aeiouyäöüáéíýóúæøåөœèêâôûïîàаоэеиыуёюяӧіɯ]/gi);
    return matched ? matched.length : 0;
  };
  return (
    <tr className="table-tr">
      <td className="table-td__text">{lineText}</td>
      <td className="table-td__quantity-words">{quantityWords}</td>
      <td className="table-td__quantity-vowels">{quantityVowels}</td>
    </tr>
  );
}

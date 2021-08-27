import React from "react";
import TableTr from "./TableTr";

export default function Table({ arrayLines }) {
  const result =
    arrayLines === [] ? (
      <tr className="box-table__tr-none">
        <td>N/A</td>
      </tr>
    ) : (
      arrayLines.map((item, index) => {
        return <TableTr key={index} text={item.text} />;
      })
    );

  return (
    <table className="box-table">
      <thead>
        <tr>
          <th className="table-th">Текст</th>
          <th className="table-th">Количество слов</th>
          <th className="table-th">Количество гласных</th>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
}

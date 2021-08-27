import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";
import { searchItem } from "./api";

function App() {
  const [arrayLines, setArrayLines] = useState([]);

  const getList = (id) => {
    searchItem(Number(id)).then((item) => {
      setArrayLines((prevArrayLines) => [...prevArrayLines, item]);
    });
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Test task "The Most Games"</h1>
      </header>
      <div className="main-box">
        <SearchBox
          arrayLines={arrayLines}
          setArrayLines={setArrayLines}
          getList={getList}
        />
        <Table arrayLines={arrayLines} />
      </div>
    </div>
  );
}

export default App;

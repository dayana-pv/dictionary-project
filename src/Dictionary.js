import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="header-dictionary">
        <br /> <br />
        <h1 className="title-dictionary">Dictionary</h1>
        <br /> <br />
        <form onSubmit={search} class=" row ">
          <div className="col-5 form-dictionary">
            <input
              type="search"
              onChange={handleKeywordChange}
              className="form-control  "
            />
          </div>

          <button type="submit" className="btn col-2 button-dictionary ">
            Search
          </button>
        </form>
        <br /> <br />
        <br />
      </div>

      <Results results={results} />
    </div>
  );
}

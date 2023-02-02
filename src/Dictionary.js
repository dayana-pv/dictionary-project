import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="header-dictionary">
          <br /> <br />
          <h1 className="title-dictionary">Dictionary</h1>
          <br /> <br />
          <form onSubmit={handleSubmit} class="row form-dictionary">
            <div className="col-1"></div>
            <div className="col-9 form-dictionary23">
              <input
                type="search"
                onChange={handleKeywordChange}
                className="form-control"
                defaultValue={props.defaultKeyword}
              />
            </div>
            <button type="button" class="col-1 btn button-dictionary">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <br /> <br />
          <br />
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

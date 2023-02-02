import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelApiKey =
      "mh2ojyRYHuikAZVebMN0D1azmjUpgx59kvxfZjTNsRXRNRtLN52w3xE7";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <div className="col-9">
              <input
                type="search"
                onChange={handleKeywordChange}
                className="form-control"
                defaultValue={props.defaultKeyword}
              />
            </div>
            <button type="submit" class="col-1 btn button-dictionary">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <br /> <br />
          <br />
        </div>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

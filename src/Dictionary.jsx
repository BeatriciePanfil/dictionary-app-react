import { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handlePhotosResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 pe-0">
                <input
                  className="search-input"
                  type="search"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
              </div>
              <div className="col-3 ps-0">
                <button type="submit" className="submit d-none d-md-inline">
                  Submit
                </button>
                <button type="submit" className="submit d-inline d-md-none p-0">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>
        </section>
        <Result results={result} />
        <Photos results={photos} />
      </main>
    );
  } else {
    load();
    return "Loading...";
  }
}

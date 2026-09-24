import { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }
  function search() {
    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
            <input
              className="search-input"
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input className="submit" type="submit" value="Search" />
          </form>
        </section>
        <Result results={result} />
      </main>
    );
  } else {
    load();
    return "Loading...";
  }
}

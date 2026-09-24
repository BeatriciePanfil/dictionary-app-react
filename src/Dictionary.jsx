import { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} />
        <input type="submit" value="Search" />
      </form>
      <Result results={result} />
    </div>
  );
}

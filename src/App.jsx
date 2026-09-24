import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container App">
      <header>
        <h1>.DICTIONARY.</h1>
      </header>

      <Dictionary defaultKeyword={"hello"} />

      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/BeatriciePanfil"
          target="_blank"
          rel="noreferrer"
        >
          Beatricie Panfil
        </a>
        , is{" "}
        <a
          href="https://github.com/BeatriciePanfil/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://dictionary-app-react-dark.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>{" "}
      </footer>
    </div>
  );
}

import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="container App">
      <Dictionary />
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
        <a href="" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>{" "}
      </footer>
    </div>
  );
}

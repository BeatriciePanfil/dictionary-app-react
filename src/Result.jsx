import Synonyms from "./Synonyms";

import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>

        <div>
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <div className="part-of-speech">{meanings.partOfSpeech}</div>
                <div className="definition">{meanings.definition}</div>
                <div className="example">{meanings.example}</div>
                <Synonyms synonyms={meanings.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

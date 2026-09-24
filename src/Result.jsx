import Synonyms from "./Synonyms";

import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div>
        {" "}
        <section>
          <h2>{props.results.word}</h2>
          <p>{props.results.phonetic}</p>
        </section>
        <section>
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <h3>{meanings.partOfSpeech}</h3>
                <div className="definition">{meanings.definition}</div>
                <div className="example">{meanings.example}</div>
                <Synonyms synonyms={meanings.synonyms} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

import React from 'react';
import './Question.css'; // Importe o arquivo CSS onde definiremos as classes de estilo

function Question({ question, options, attempts, onAnswer }) {
  // Array de classes CSS para cada cor
  const optionClasses = ['option-red', 'option-yellow', 'option-blue', 'option-green'];

  return (
    <div className="question-container">
      <div className="question">
        <h2 className="question-text">{question}</h2>
      </div>
      <div className="options-container">
        <div className="options-row">
          <button
            onClick={() => onAnswer(options[0])}
            className={`option ${optionClasses[0]}`}
          >
            {options[0]}
          </button>
          <button
            onClick={() => onAnswer(options[1])}
            className={`option ${optionClasses[1]}`}
          >
            {options[1]}
          </button>
        </div>
        <div className="options-row">
          <button
            onClick={() => onAnswer(options[2])}
            className={`option ${optionClasses[2]}`}
          >
            {options[2]}
          </button>
          <button
            onClick={() => onAnswer(options[3])}
            className={`option ${optionClasses[3]}`}
          >
            {options[3]}
          </button>
        </div>
      </div>
      <p className="attempts">Tentativas restantes: {attempts}</p>
    </div>
  );
}

export default Question;

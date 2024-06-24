import React, { useState } from 'react';
import ProgramSelector from './components/ProgramSelector';
import Question from './components/Question';
import Score from './components/Score';
import programs from './data/programs';
import './App.css';

function App() {
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const handleProgramSelect = (index) => {
    setSelectedProgramIndex(index);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttempts(3);
    setGameOver(false);
  };

  const handleAnswer = (selectedOption) => {
    const currentProgram = programs[selectedProgramIndex];
    const currentQuestion = currentProgram.questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + attempts);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < currentProgram.questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setAttempts(3);
      } else {
        setGameOver(true);
      }
    } else {
      if (attempts > 1) {
        setAttempts(attempts - 1);
      } else {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < currentProgram.questions.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
          setAttempts(3);
        } else {
          setGameOver(true);
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Pense Bem</h1>
        <div className="question-container">
          {selectedProgramIndex === null ? (
            <ProgramSelector programs={programs} onSelect={handleProgramSelect} />
          ) : gameOver ? (
            <div>
              <h2>Fim de jogo!</h2>
              <Score score={score} />
              <button onClick={() => setSelectedProgramIndex(null)}>Selecionar Outro Programa</button>
            </div>
          ) : (
            <Question
              question={programs[selectedProgramIndex].questions[currentQuestionIndex].question}
              options={programs[selectedProgramIndex].questions[currentQuestionIndex].options}
              attempts={attempts}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

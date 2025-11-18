import React, { useState } from "react";
import questions from "../data/questions.json";
import Question from "../Components/Question";
import Results from "../Components/Results";
import { Container } from "react-bootstrap";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  function selectOption(questionIndex, optionIndex) {
    setAnswers(prev => {
      const copy = [...prev];
      copy[questionIndex] = optionIndex;
      return copy;
    });
  }

  function next() {
    if (current < questions.length - 1) setCurrent(c => c + 1);
    else setShowResults(true);
  }

  function prev() {
    if (current > 0) setCurrent(c => c - 1);
  }

  function restart() {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setShowResults(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh", // permet le centrage vertical
        backgroundColor: "#121212", 
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px", // largeur maximale sur grand écran
          fontFamily: "sans-serif",
          textAlign: "center",
          border: "2px solid black",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#1e1e1e",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ color: "darkRed", marginBottom: "20px" }}>
            Quiz League of Legends
          </h1>

          {!showResults ? (
            <>
              <Question
                data={questions[current]}
                questionIndex={current}
                total={questions.length}
                selected={answers[current]}
                onSelect={selectOption}
                questionStyle={{ color: "white" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "20px",
                  // responsive : boutons côte à côte sur grand écran
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: current === 0 ? "not-allowed" : "pointer",
                    backgroundColor: current === 0 ? "#555" : "darkRed",
                    color: "white",
                    width: "100%", 
                    maxWidth: "180px", // limite la largeur sur grand écran
                  }}
                  onClick={prev}
                  disabled={current === 0}
                >
                  Précédent
                </button>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "darkRed",
                    color: "white",
                    width: "100%",
                    maxWidth: "180px",
                  }}
                  onClick={next}
                >
                  {current === questions.length - 1 ? "Terminer" : "Suivant"}
                </button>
              </div>
            </>
          ) : (
            <Results
              questions={questions}
              answers={answers}
              onRestart={restart}
            />
          )}
        </Container>
      </div>
    </div>
  );
}

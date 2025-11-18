import React from "react";

export default function Results({ questions, answers, onRestart }) {
  const score = answers.reduce((total, ans, index) => {
    if (ans === questions[index].answerIndex) return total + 1;
    return total;
  }, 0);

  const reviewItemStyle = correct => ({
    backgroundColor: correct ? "#d4edda" : "#f8d7da",
    padding: "5px",
    margin: "5px 0",
    borderRadius: "4px",
  });

  return (
    <div>
      <h2 style={{color: "darkgreen"}}>Résultats</h2>
      <p style={{color: "white"}}>
        Vous avez {score} / {questions.length} bonnes réponses !
      </p>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {questions.map((q, i) => {
          const correct = answers[i] === q.answerIndex;
          return (
            <li key={i} style={reviewItemStyle(correct)}>
              <strong>Q{i + 1} :</strong> {q.question} <br />
              <span>Votre réponse : {answers[i] !== null ? q.options[answers[i]] : "Aucune"}</span> <br />
              <span>Bonne réponse : {q.options[q.answerIndex]}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={onRestart}>Recommencer le quiz</button>
    </div>
  );
}

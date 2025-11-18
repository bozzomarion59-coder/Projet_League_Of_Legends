import React from "react";

export default function Question({ data, questionIndex, total, selected, onSelect, questionStyle }) {
  const optionsListStyle = { listStyle: "none", padding: 0 };
  const optionButtonStyle = selected => ({
    margin: "5px",
    padding: "8px 16px",
    cursor: "pointer",
    backgroundColor: selected ? "#4caf50" : "#f0f0f0",
    color: selected ? "white" : "black",
    border: "1px solid #ccc",
    borderRadius: "4px",
  });

  return (
    <div>
      <h2 style={{color: "darkgreen"}}>
        Question {questionIndex + 1} / {total}
      </h2>
      <p style={questionStyle}>{data.question}</p>
      <ul style={optionsListStyle}>
        {data.options.map((option, index) => (
          <li key={index}>
            <button
              style={optionButtonStyle(selected === index)}
              onClick={() => onSelect(questionIndex, index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

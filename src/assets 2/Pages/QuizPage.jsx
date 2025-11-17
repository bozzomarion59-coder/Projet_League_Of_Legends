import { useState } from "react";
import questions from "../questions.json";

const QuizPage = () => {
    const[current, setCurrent] = useState(0);
    const[answers, setAnswers] = useState(Array(questions.length).fill(null)); //pour avoir un tableau avec valeur null quand la personne ne répond pas à la question
   
}

import questions from "../data/questions.json";

function getQuestions() {
  return questions;
}

function getQuestionByIndex(index) {
  return questions[index];
}

export default {
  getQuestions,
  getQuestionByIndex
};

import QuizQuestion from "./QuizQuestion.jsx";
import questions from "./QuestionsDB.json";
import { useRef, useState } from "react";

const Quiz = () => {
  let answers = [];
  let total = 0;
  let result = 0;

  for (let i in questions.root) {
    answers.push(false);
  }

  let questionList = questions.root.map((data, index) => {
    return (
      <QuizQuestion
        key={index}
        datadb={data}
        questionIndex={index}
        answerSelected={onAnswerSelected}
      />
    );
  });

  function onAnswerSelected(index, isCorrect) {
    answers[index] = isCorrect;
    console.log("selected answer passed is " + isCorrect);
  }

  function onSubmitClicked() {
    console.log("submit clicked");
    total = answers.length;
    result = 0;
    answers.map((val) => {
      result += val ? 1 : 0;
    });

    document.getElementById("quiz-result").innerHTML =
      "You scored  " + result + " out of " + total;
  }

  return (
    <>
      <div className="quiz hero-body">
        <p className="primary-label">Quiz on triangles</p>
        <p className="quiz-secondary-label">
          For each correct answer you will get 1 point
        </p>
        {questionList.map((value) => value)}
        <button className="primary-button" onClick={onSubmitClicked}>
          Submit Answer
        </button>

        <p
          id="quiz-result"
          style={{
            fontWeight: "600",
            fontSize: "25px",
            marginTop: "10px",
          }}>
          result will come here
        </p>
      </div>
    </>
  );
};

export default Quiz;

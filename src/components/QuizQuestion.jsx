import "./components.css";

const QuizQuestion = ({ datadb, questionIndex, answerSelected }) => {
  datadb.o.map((val) => {
    // console.log(questionIndex);
  });

  function OptionsList(data, ans) {
    return (
      <ul id="options-list">
        {data.map((val, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`options-${questionIndex}`}
                onChange={() => {
                  console.log({ val });
                  if (val == data[ans]) {
                    console.log("correct answer");
                  } else {
                    console.log("wrong answer " + val + "   " + data[ans]);
                  }
                  answerSelected(questionIndex, val == data[ans]);
                }}
              />
              {val}
            </label>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="quiz-question">
      <p className="quiz-question-item">{datadb.q}</p>
      {OptionsList(datadb.o, datadb.c)}
    </div>
  );
};

export default QuizQuestion;

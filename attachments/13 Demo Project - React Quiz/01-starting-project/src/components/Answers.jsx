import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffleAnswers = useRef();
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let className = "";
        if (answerState === "answered" && isSelected) {
          className = "selected";
        } else if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          className = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={className}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

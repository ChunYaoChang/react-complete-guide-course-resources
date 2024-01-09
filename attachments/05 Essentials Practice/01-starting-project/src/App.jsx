import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { Result } from "./components/Result";

const INITIAL_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  const isInputValid = userInput.duration >= 1;

  console.log(userInput);

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const curUserInput = {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
      return curUserInput;
    });
  }
  return (
    <>
      <Header></Header>;
      <UserInput
        userInput={userInput}
        handleChange={handleUserInputChange}
      ></UserInput>
      {!isInputValid && <p>Invalid Input</p>}
      {isInputValid && <Result userInput={userInput}></Result>}
    </>
  );
}

export default App;

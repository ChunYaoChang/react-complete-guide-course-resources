import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crutial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descriptions = reactDescriptions[getRandomInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

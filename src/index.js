import "./styles/index.scss";
import "bootstrap";

const userStack = {
  language: "JavaScript",
  framework: "React",
};

const user = {
  name: "Rom",
  age: "45",
  ...userStack,
};

console.log(user);

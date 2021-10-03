import Header from "./Header/header-component";
import QuizSection from "./QuizSection/QuizSection-component";
import MockTestSection from "./MockTestSection/MockTestSection-component";

import "./styles.css";
import Description from "./Description/Description-component";

export default function App() {
  return (
    <div className="App">
      <Header />
      <QuizSection />
      <MockTestSection />
      <Description />
    </div>
  );
}

import Header from "./Header/header-component";
import QuizSection from "./QuizSection/QuizSection-component";
import MockTestSection from "./MockTestSection/MockTestSection-component";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <QuizSection />
      <MockTestSection />
    </div>
  );
}

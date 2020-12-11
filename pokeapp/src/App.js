import "./App.css";
import Lista from "./components/Lista";
import { Route } from "react-router-dom";
import SingleCard from "./components/SingleCard";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Lista} />
      <Route exact path="/pokemon/:name" component={SingleCard} />
    </div>
  );
}

export default App;

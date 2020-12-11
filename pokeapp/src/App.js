import "./App.css";
import Lista from "./components/Lista";
import { Route } from "react-router-dom";
import SingleCard from "./components/SingleCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Lista} />
      <Route exact path="/:name" component={SingleCard} />
    </div>
  );
}

export default App;

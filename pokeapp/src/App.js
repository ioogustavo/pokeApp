import "./App.css";
// import Lista from "./components/Lista";
import { Route } from "react-router-dom";
import SingleCard from "./components/SingleCard";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      {/* <Route exact path="/" component={Lista} /> */}
      <Route exact path="/" component={Main} />
      <Route exact path="/:name" component={SingleCard} />
    </div>
  );
}

export default App;

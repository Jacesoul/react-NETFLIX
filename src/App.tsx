import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/tv">
          <Tv></Tv>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

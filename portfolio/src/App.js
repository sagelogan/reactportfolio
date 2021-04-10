import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

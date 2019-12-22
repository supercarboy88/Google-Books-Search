import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/Saved";
import SearchBooks from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
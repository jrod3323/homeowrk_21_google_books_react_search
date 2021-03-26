import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import SearchPage from "./pages/Search";
import SavePage from "./pages/Saved"


function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <SearchPage />
          </Route>
          <Route exact path="/books/saved">
            <SavePage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

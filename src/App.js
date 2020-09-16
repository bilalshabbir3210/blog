import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginControl from "./container/loginControl";
import IndexControl from "./container/indexControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginControl} />
          <Route exact path="/" component={IndexControl} />
          <Route exact path="/posts/:id" component={SinglePost} />
          <Route  path="*" component={()=> <h2 className="text-center m-5">404-Error Page Not Found. </h2>  } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

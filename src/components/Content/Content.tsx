import React from "react";
import "./Content.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {ComponentsWrapper} from '../ComponentsWrapper/ComponentsWrapper'

/**
 * Functional component with routes
 */
const Content = () => {
  /**
   * 
   * Renderer function which paints Header and contents
   */
    return (
      <Router>
        <div className="content">
          <Switch>
            <Route path="/" exact component={ComponentsWrapper} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
}

export { Content };

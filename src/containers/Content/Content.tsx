import React, { Component } from "react";
import { IContentProps } from "../../shared/Interfaces";
import "./Content.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {ComponentsWrapper} from './../../components/ComponentsWrapper/ComponentsWrapper'
class Content extends Component<IContentProps, any> {
  /**
   * @Remarks
   * Renderer function which paints Header and contents
   */
  render() {
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
}

export { Content };

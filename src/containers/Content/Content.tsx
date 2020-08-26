import React, { Component } from "react";
import { IContentProps } from "../../shared/Interfaces";
import "./Content.scss";
import { HeaderWrapperComponent } from "../../components/HeaderWrapperComponent/HeaderWrapperComponent";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component<IContentProps, any> {
  /**
   * @Remarks
   * Renderer function which paints Header and contents
   */
  render() {
    return (
      <Router>
        <div className="content">
          <HeaderWrapperComponent></HeaderWrapperComponent>
          <Switch>
            <Route path="/content" exact component={ContentWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { Content };

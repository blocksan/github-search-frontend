import React, { Component } from 'react'
import { IContentProps } from '../../shared/Interfaces'
import './Content.scss';
import { HeaderWrapperComponent } from '../../components/HeaderWrapperComponent/HeaderWrapperComponent';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Content extends Component<IContentProps,any> {

    constructor(props: IContentProps){
        super(props)
    }

    render() {
        return (
            <div className="content">
                <HeaderWrapperComponent></HeaderWrapperComponent>
                <Router>
                    <Switch>
                        <Route path="/content" exact component={ContentWrapper} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export {Content}

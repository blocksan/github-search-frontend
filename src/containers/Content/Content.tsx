import React, { Component } from 'react'
import { IContentProps, TFetchContent, EContentType } from '../../shared/Interfaces'
import './Content.scss';
import { HeaderWrapperComponent } from '../../components/HeaderWrapperComponent/HeaderWrapperComponent';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Content extends Component<IContentProps,any> {
    /**
     * 
     * @param props : IContentProps
     */
    constructor(props: IContentProps){
        super(props)
    }

    /**
     * @Remarks
     * Renderer function which paints Header and contents
     */
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

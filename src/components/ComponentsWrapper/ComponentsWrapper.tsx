import React from 'react'
import { HeaderWrapperComponent } from "../../components/HeaderWrapperComponent/HeaderWrapperComponent";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

/**
 * Functional component to wrap 
 * 1. HeaderWrapperComponent
 * 2. ContentWrapper
 */
const ComponentsWrapper = () => {
    return (
        <div>
             <HeaderWrapperComponent></HeaderWrapperComponent>
            <ContentWrapper></ContentWrapper>
        </div>
    )
}

export {ComponentsWrapper}

import React from 'react'
import { HeaderWrapperComponent } from "../../components/HeaderWrapperComponent/HeaderWrapperComponent";
import { ContentWrapper } from "./../../containers/ContentWrapper/ContentWrapper";

function ComponentsWrapper() {
    return (
        <div>
             <HeaderWrapperComponent></HeaderWrapperComponent>
            <ContentWrapper></ContentWrapper>
        </div>
    )
}

export {ComponentsWrapper}

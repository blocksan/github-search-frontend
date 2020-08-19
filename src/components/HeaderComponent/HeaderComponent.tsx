import React from 'react'
import { IHeaderProps } from '../../shared/Interfaces'
import './HeaderComponent.scss'
import crossIcon from './../../shared/images/githubLogo.png'

export const HeaderComponent = (props: IHeaderProps) => {
    return (
        <div className="headerComponent">
            <div className="imageLogo">
                <img src={crossIcon} alt="Github Sercher"/>
            </div>
            <div className="imageContent">
                <strong>GitHub Searcher</strong>
                <span>Search users or respositories below</span>
            </div>
        </div>
    )
}

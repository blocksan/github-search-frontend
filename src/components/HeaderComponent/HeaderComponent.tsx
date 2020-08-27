import React from 'react'
import { IHeaderProps } from '../../shared/Interfaces'
import './HeaderComponent.scss'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import crossIcon from './../../shared/images/githubLogo.png'

export const HeaderComponent = (props: IHeaderProps) => {
    return (
        <div className="headerComponent">
            <div className="imageLogo">
                <FontAwesomeIcon  icon={faGithub} title="Github Sercher" size="3x"></FontAwesomeIcon>
            </div>
            <div className="imageContent">
                <strong>GitHub Searcher</strong>
                <span>Search users or respositories below</span>
            </div>
        </div>
    )
}

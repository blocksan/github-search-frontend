import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeBranch, faLock, faArchive } from '@fortawesome/free-solid-svg-icons'
import NumericLabel from 'react-pretty-numbers';
import { IRepositoryCardProps } from "../../shared/Interfaces";
import "./RepositoryCardComponent.scss";
import { numberFormatOptions } from "../../shared/utils/numerFormat";

export const RepositoryCardComponent = (props: IRepositoryCardProps) => {
  const {name, profileUrl, avatarUrl, repoName, repoUrl, repoDescription, stars, forks, archived, isPrivate, createdOn} = props;
  return (
    <section className="repositoryCardComponent">
      <article className="cardWrapper">
        <header>
          <div className="cardImage">
            <img
              src={avatarUrl}
              alt={name}
            />
          </div>
          <div className="cardDetails">
            <h4>Sandeep Ghosh</h4>
            <a href={profileUrl} className="link">See profile</a>
          </div>
        </header>
        <section className="info">
          <div className="leftWrapper">
            <div className="inforow name">
              <span className="bold">{repoName}</span>
            </div>
            <div className="inforow repoUrl">
              <a href={repoUrl} className="link">{repoUrl}</a>
            </div>
            <div className="inforow createdAt pill shadow">
  <strong>{createdOn}</strong>
            </div>
            <div className="description">
              <div className="inforow">
                <span className="tag"> Description</span>
              </div>
              <p>
               {repoDescription}
              </p>
            </div>
          </div>
        </section>
        <footer>
          <div className="iconsContentWrapper">
            <div className="infoIcons stars">
            <FontAwesomeIcon icon={faStar} title="Star"/>
  <span><NumericLabel params={numberFormatOptions}>{stars}</NumericLabel></span></div>
            <div className="infoIcons forks">
            <FontAwesomeIcon icon={faCodeBranch} title="Fork" />
  <span>{forks}</span></div>
            <div className="infoIcons archived">
              <FontAwesomeIcon icon={faArchive} title={archived? "Archived": "Not Archived"} className={archived? "Archived": "Not Archived"} ></FontAwesomeIcon>
              </div>
            <div className="infoIcons access">
            <FontAwesomeIcon icon={faLock} title={isPrivate?"Private":"Public"} ></FontAwesomeIcon>
            </div>
          </div>
        </footer>
      </article>
    </section>
  );
};

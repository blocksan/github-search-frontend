import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch,
  faLock,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import NumericLabel from "react-pretty-numbers";
import {
  IRespositoryTypeContent,
} from "../../shared/Interfaces";
import "./RepositoryCardComponent.scss";
import Moment from "react-moment";
import { momentDateFormat } from "./../../shared/utils/dateFormat";
import { numberFormatOptions } from "../../shared/utils/numerFormat";

const BaseRepositoryCardComponent = (props: IRespositoryTypeContent) => {
  const {
    name,
    html_url,
    owner,
    description,
    stargazers_count,
    forks_count,
    archived,
    private: isPrivate,
    created_at,
  } = props;
  return (
    <section className="repositoryCardComponent">
      <article className="cardWrapper">
        <header>
          <div className="cardImage">
            <img src={owner.avatar_url} alt={owner.login} />
          </div>
          <div className="cardDetails">
            <h4>{owner.login}</h4>
            <a target="_blank" href={owner.html_url} className="link">
              See profile
            </a>
          </div>
        </header>
        <section className="info">
          <div className="leftWrapper">
            <div className="inforow name">
              <span className="bold">{name}</span>
            </div>
            <div className="inforow repoUrl">
              <a href={html_url} className="link">
                {html_url}
              </a>
            </div>
            <div className="inforow createdAt pill shadow">
              <strong>
                <Moment format={momentDateFormat.format}>{created_at}</Moment>{" "}
              </strong>
            </div>
            <div className="description">
              <div className="inforow">
                <span className="tag"> Description</span>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </section>
        <footer>
          <div className="iconsContentWrapper">
            <div className="infoIcons stars">
              <FontAwesomeIcon icon={faStar} title="Stars" />
              <span>
                <NumericLabel params={numberFormatOptions}>
                  {stargazers_count}
                </NumericLabel>
              </span>
            </div>
            <div className="infoIcons forks">
              <FontAwesomeIcon icon={faCodeBranch} title="Forks" />
              <span>{forks_count}</span>
            </div>
            <div className="infoIcons archived">
              <FontAwesomeIcon
                icon={faArchive}
                title={archived ? "Archived" : "Not Archived"}
                className={archived ? "Archived" : "Not Archived"}
              ></FontAwesomeIcon>
            </div>
            <div className="infoIcons access">
              <FontAwesomeIcon
                icon={faLock}
                title={isPrivate ? "Private" : "Public"}
              ></FontAwesomeIcon>
            </div>
          </div>
        </footer>
      </article>
    </section>
  );
};

export const RepositoryCardComponent = React.memo(BaseRepositoryCardComponent)
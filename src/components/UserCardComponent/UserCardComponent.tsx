import React from "react";
import { IUserCardProps } from "../../shared/Interfaces";
import "./UserCardComponent.scss";
import { numberFormatOptions } from "../../shared/utils/numerFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCodeBranch,
  faLock,
  faArchive,
  faSearchLocation,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faUsers,
  faGlobeAsia,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import NumericLabel from "react-pretty-numbers";

export const UserCardComponent = (props: IUserCardProps) => {
  const {
    name,
    profileUrl,
    avatarUrl,
    bio,
    repoCount,
    followersCount,
    blog,
    joinedOn,
    location,
  } = props;
  return (
    <section className="userCardComponent">
      <article className="cardWrapper">
        <header>
          <div className="cardImage">
            <img src={avatarUrl} alt={name} />
          </div>
        </header>
        <section className="info">
          <h4 className="name">{name}</h4>
          <div className="locationJoinedWrapper">
            <div className="location cta">
              <FontAwesomeIcon icon={faMapMarkerAlt} title="Star" />
              <strong> {location} </strong>
            </div>
            <div className="joinedOn">
              <em>Joined On :</em>
              <span>{joinedOn}</span>
            </div>
          </div>
          <div className="iconWrapper">
            <a href={profileUrl} className="link github cta">
              <FontAwesomeIcon icon={faGithub} title="Star" />
              <strong>Github </strong>
            </a>
          </div>
          <div className="description">
            <p>{bio}</p>
          </div>
        </section>
        <aside>
          <div className="iconsContentWrapper">
            <div className="infoIcons stars">
              <FontAwesomeIcon icon={faGithubSquare} title="Star" />
              <span>
                <NumericLabel params={numberFormatOptions}>
                  {repoCount}
                </NumericLabel>
              </span>
            </div>
            <div className="infoIcons forks">
              <FontAwesomeIcon icon={faUsers} title="Followers" />
              <span>{followersCount}</span>
            </div>
            <div className="infoIcons">
              <a href={blog}>
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  title="Blog"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </aside>
      </article>
    </section>
  );
};

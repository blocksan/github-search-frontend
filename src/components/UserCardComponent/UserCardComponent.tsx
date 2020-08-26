import React from "react";
import { IUserTypeContent } from "../../shared/Interfaces";
import "./UserCardComponent.scss";
import Moment from 'react-moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUsers,
  faGlobeAsia,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import NumericLabel from "react-pretty-numbers";
import { momentDateFormat } from './../../shared/utils/dateFormat'


export const UserCardComponent = (props: IUserTypeContent) => {
  const {
    detailInfo:{ name, bio, created_at, followers, blog, location, public_repos},
    html_url,
    avatar_url    
  } = props;
  console.log({html_url})
  return (
    <section className="userCardComponent">
      <article className="cardWrapper">
        <header>
          <div className="cardImage">
            <img src={avatar_url} alt={name} />
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
              <span><Moment format={momentDateFormat.format}>{created_at}</Moment> </span>
            </div>
          </div>
          <div className="iconWrapper">
            <a target="_blank" href={html_url} className="link github cta">
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
              <FontAwesomeIcon icon={faGithubSquare} title="Pubic Repos" />
              <span>
                <NumericLabel params={{precision:0}}>
                  {public_repos}
                </NumericLabel>
              </span>
            </div>
            <div className="infoIcons forks">
              <FontAwesomeIcon icon={faUsers} title="Followers" />
              <span>{followers}</span>
            </div>
            <div className="infoIcons">
              <a target="_blank" href={blog}>
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

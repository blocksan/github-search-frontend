import React, { useRef, useCallback } from "react";
import {
  IContentWrapperProps,
  IUserTypeContent,
  IRespositoryTypeContent,
} from "../../shared/Interfaces";
import { EContentType, TFetchContent } from "../../shared/Interfaces/IContent";
import "./ContentWrapper.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner
  } from "@fortawesome/free-solid-svg-icons";
import { RepositoryCardComponent } from "../../components/RepositoryCardComponent/RepositoryCardComponent";
import { UserCardComponent } from "../../components/UserCardComponent/UserCardComponent";
import { connect } from "react-redux";
import { fetchContentAction } from "../../store/rootActions";

const BaseContentWrapper = (props: IContentWrapperProps) => {
  const { contents, type, loading, fetchContentDispatcher, error, page, totalPages } = props;

  const observer = useRef() as React.MutableRefObject<any>;
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer && observer.current) { 
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          fetchContentDispatcher({ page: page+1, type, searchkey:"123123" });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, fetchContentDispatcher]
  );
  return (
    <div className="contentWrapper">
      {(!loading || page > 1) && contents && contents.length > 0 &&
        (<div className="showContent">
          {contents.map((content, index) => {
            if (type === EContentType.user) {
              const tempprops = content as IUserTypeContent;
              if (contents.length === index + 1)
                return (
                  <div ref={lastElementRef} key={`${index}`}>
                    <UserCardComponent {...tempprops}></UserCardComponent>
                  </div>
                );
              else
                return (
                  <UserCardComponent
                    {...tempprops}
                    key={`${index}`}
                  ></UserCardComponent>
                );
            } else {
              const tempprops = content as IRespositoryTypeContent;
              if (contents.length === index + 1)
                return (
                  <div ref={lastElementRef} key={`${index}`}>
                    <RepositoryCardComponent
                      {...tempprops}
                    ></RepositoryCardComponent>
                  </div>
                );
              else
                return (
                  <RepositoryCardComponent
                    {...tempprops}
                    key={`${index}`}
                  ></RepositoryCardComponent>
                );
            }
          })}
        </div>)
      }
      {loading &&  page ===1 &&(
          <div className="showLoading">
              <FontAwesomeIcon icon={faSpinner} spin title="Loading" />
          </div>
      )}
      {loading &&  page !==1 &&(
          <div className="showOverlayLoading">
              <FontAwesomeIcon icon={faSpinner} spin title="Loading" />
          </div>
      )}
      {!loading && error && (
          <div className="showError">
              {error}
          </div>
      )}
      {!loading && !error &&  contents && contents.length < 1 && (
        <div className="showNoContent">
            No content found
        </div>)
      }
    </div>
  );
};

const stateToProps = (state: any) => {
  return {
    contents: state.content.contentList,
    type: state.content.type,
    value: state.content.value,
    loading: state.content.fetchingContent,
    error: state.content.fetchingContentError,
    page: state.content.page,
    totalPages: state.content.totalPages
  };
};
const dispatchers = (dispatch: any) => {
  return {
    fetchContentDispatcher: (params: TFetchContent) =>
      dispatch(fetchContentAction(params)),
  };
};

const ContentWrapper = connect(stateToProps, dispatchers)(BaseContentWrapper);

export { ContentWrapper, BaseContentWrapper };

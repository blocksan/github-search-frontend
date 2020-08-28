import React, { useRef, useCallback } from "react";
import {
  IContentWrapperProps,
  IUserTypeContent,
  IRespositoryTypeContent,
} from "../../shared/Interfaces";
import { EContentType, TFetchContent } from "../../shared/Interfaces/IContent";
import "./ContentWrapper.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { RepositoryCardComponent } from "../RepositoryCardComponent/RepositoryCardComponent";
import { UserCardComponent } from "../UserCardComponent/UserCardComponent";
import { connect } from "react-redux";
import { fetchContentAction } from "../../store/rootActions";

/**
 * Functional component which acts as wrapper for User Card or Repository card
 * 1. Infinite scroll
 * 2. User card
 * 3. Repository card
 * 4. Error component
 * 5. Loading component
 * @param props IContentWrapperProps
 */
const BaseContentWrapper = (props: IContentWrapperProps) => {
  const {
    contents,
    type,
    loading,
    fetchContentDispatcher,
    error,
    page,
    totalPages,
    value,
  } = props;

  const observer = useRef() as React.MutableRefObject<any>;
  /**
   * Utility to get the observer for the last item in the list using React Ref
   * The last item will be used to check the Intersection when it shows on View Port
   * fetchContentDispatcher method will be invoked every time the last item is being on shown on View Port
   */
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer && observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          fetchContentDispatcher({ page: page + 1, type, searchkey: value });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, page, totalPages, value, fetchContentDispatcher]
  );
  /**
   * There are different cases based on which components are rendering
   * 1. Loading -> Loading icon on the view
   * 2. Not Loading and Contents available -> Show contents list
   * 3. Not Loading and Error occured -> Show error text with red color
   * 4. Infinite scroll loading i.e Page > 1 and loading state -> show overlay loading and do not hide the contents
   * 5. Infinite scroll loading i.e Page > 1 and successful state -> show the appended contents into the view
   */
  return (
    <>
    {value && <div className="contentWrapper">
      {(!loading || page > 1) && contents && contents.length > 0 && (
        <div className="showContent">
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
        </div>
      )}
      {loading && (
        <div
          className={`showLoading ${page !== 1 ? "showOverlayLoading" : ""}`}
        >
          <FontAwesomeIcon icon={faSpinner} spin title="Loading" />
        </div>
      )}
      {!loading && error && <div className="showError">{error}</div>}
      {!loading && value && !error && contents && contents.length < 1 && (
        <div className="showNoContent">No content found</div>
      )}
    </div>}
    </>
  );
};

const stateToProps = (state: any) => {
  return {
    contents: state.content.contentList,
    type: state.content.type,
    value: state.content.searchkey,
    loading: state.content.fetchingContent,
    error: state.content.fetchingContentError,
    page: state.content.page,
    totalPages: state.content.totalPages,
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

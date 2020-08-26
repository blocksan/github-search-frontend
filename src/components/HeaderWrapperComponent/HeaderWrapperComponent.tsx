import React, {useState, useEffect} from "react";
import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { SelectionComponent } from "../SelectionComponent/SelectionComponent";
import {
  IHeaderWrapperProps,
  TFetchContent,
} from "../../shared/Interfaces";
import {
  EContentType,
} from "../../shared/Interfaces/IContent";

import "./HeaderWrapperComponent.scss";
import { connect } from "react-redux";
import { fetchContentAction } from "../../store/rootActions";

export const BaseHeaderWrapperComponent = (props: IHeaderWrapperProps) => {
  const { totalPages, page: currentPage } = props;

  const [value, setSearchValue] = useState("")
  const [page, setInitPage] = useState(1)
  const [firstInit, setFirstInit] = useState(false)
  const [type, setSearchType] = useState(EContentType.user)

  /**
   * @Remarks
   * Callback handler for the type change 
   * @Params: type EContentType
   *
   */
  const handleTypeChange = (type: EContentType) => {
    setSearchType(type)
    setFirstInit(true)
    setInitPage(1)
  };

  /**
   * @Remarks
   * Callback handler for the input change
   
   *
   * @Params: value string
   *
   */
  const handleInputChange = (value: string) => {
    if(value)
      setFirstInit(true)
    setSearchValue(value)
  };
  
  /**
   * Utility function to call the Dispatcher function
   * Delegate the request to action by calling disptacher function
   */
  const callFetchDispatcher = () =>{
    const { fetchContentDispatcher } = props;
    if(value.length >= 3)
      fetchContentDispatcher({ type, page, searchkey: value });
    else if (firstInit && (!value || value.length<3)){
      fetchContentDispatcher({ type, page, searchkey: "" });
    }

  } 

  /**
   * @Remarks
   * Effect method to call the utility callFetchDispatcher 
   */
  useEffect(() => {
      callFetchDispatcher()
    // return () => {
    //   cleanup
    // }
  }, [value,type, page, callFetchDispatcher])

  return (
    <section className={`headerWrapper ${totalPages ? 'fixed' : ''}`}>
      <section className="elementWrapper">
        <HeaderComponent></HeaderComponent>
        <article>
          <SearchComponent
            inputChangeEvent={handleInputChange}
          ></SearchComponent>
          <SelectionComponent
            typeChangedEvent={handleTypeChange}
          ></SelectionComponent>
        </article>
      </section>
      {totalPages > 0 && <article className="pageNumberView">
          Fetched {currentPage} of {totalPages} pages
      </article>}
    </section>
  );
};

const stateToProps = (state: any) => {
  return {
    page: state.content.page,
    totalPages: state.content.totalPages
  }
};
const dispatchers = (dispatch: any) => {
  return {
    fetchContentDispatcher: (params: TFetchContent) =>
      dispatch(fetchContentAction(params)),
  };
};

const HeaderWrapperComponent = connect(
  stateToProps,
  dispatchers
)(BaseHeaderWrapperComponent);

export { HeaderWrapperComponent };

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

  const [value, setSearchValue] = useState("")
  const [page, setInitPage] = useState(1)
  const [type, setSearchType] = useState(EContentType.user)

  /**
   * @Remarks
   * Callback handler for the type change 
   * @Params: type EContentType
   *
   */
  const handleTypeChange = (type: EContentType) => {
    setSearchType(type)
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
    setSearchValue(value)
  };
  
  /**
   * Utility function to call the Dispatcher function
   * Delegate the request to action by calling disptacher function
   */
  const callFetchDispatcher = () =>{
    const { fetchContentDispatcher } = props;
    console.log(type,'---type----')
    fetchContentDispatcher({ type, page, value });

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
    <section className="headerWrapper">
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
    </section>
  );
};

const stateToProps = (state: any) => {
  return {}
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

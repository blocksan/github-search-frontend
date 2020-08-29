import React from 'react'
import './SearchComponent.scss'
import { ISearchComponent } from '../../shared/Interfaces/ISearchComponent'
import crossIcon from './../../shared/images/cross.svg'
import searchIcon from './../../shared/images/search.svg'
import {debounce} from 'lodash'
export const SearchComponent = (props: ISearchComponent) => {
    const { storevalue} = props;

    const inputRef = React.createRef<any>()
    const {inputChangeEvent} = props;
    /**
     * @Remarks 
     * Utility function to debounce the request after 3 characters
     */
    const handleChange = debounce((value: string) => {
        inputChangeEvent(value)
    },300)

    const searchClearHandler = () =>{
        inputRef.current.value = ""
        inputChangeEvent("")
    }

    const searchHandler = () => {
        inputChangeEvent(storevalue)
    }

    setTimeout(function(){
        if(storevalue && inputRef.current){
            inputRef.current.value = storevalue
        }
    },0)

    return (
        <div className="searchComponent">
            <input type="text" ref={inputRef} placeholder="Start typing to search..." onChange={(e) => handleChange(e.target.value)}/>
            <div style={{width:40}}>
            {storevalue && <img src={crossIcon} className="crossIcon" alt="cross icon" onClick={searchClearHandler}/>}
            {!storevalue && <img src={searchIcon} className="searchIcon" alt="search icon" onClick={searchHandler}/>}
            </div>
        </div>
    )
}
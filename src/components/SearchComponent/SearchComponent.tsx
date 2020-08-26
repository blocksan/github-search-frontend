import React, { useState } from 'react'
import './SearchComponent.scss'
import { ISearchComponent } from '../../shared/Interfaces/ISearchComponent'
import crossIcon from './../../shared/images/cross.svg'
import searchIcon from './../../shared/images/search.svg'
import {debounce} from 'lodash'
export const SearchComponent = (props: ISearchComponent) => {
    const inputRef = React.createRef<any>()
    const {inputChangeEvent} = props;
    const [value, setValue] = useState("")
    /**
     * @Remarks 
     * Utility function to debounce the request after 3 characters
     */
    const handleChange = debounce((value: string) => {
        setValue(value)
        inputChangeEvent(value)
    },300)

    const searchClearHandler = () =>{
        setValue("")
        inputRef.current.value = ""
        inputChangeEvent("")
    }

    return (
        <div className="searchComponent">
            <input type="text" ref={inputRef} placeholder="Start typing to search..." onChange={(e) => handleChange(e.target.value)}/>
            <div style={{width:40}}>
            {value && <img src={crossIcon} className="crossIcon" alt="cross icon" onClick={searchClearHandler}/>}
            {!value && <img src={searchIcon} className="searchIcon" alt="search icon" onClick={(e)=>handleChange(value)}/>}
            </div>
        </div>
    )
}
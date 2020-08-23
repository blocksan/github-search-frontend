import React, { ChangeEvent } from 'react'
import './SearchComponent.scss'
import { ISearchComponent } from '../../shared/Interfaces/ISearchComponent'

export const SearchComponent = (props: ISearchComponent) => {
    const {inputChangeEvent} = props;

    /**
     * @Remarks 
     * Utility function to debounce the request after 3 characters
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget
        inputChangeEvent(value)
    }

    return (
        <div className="searchComponent">
            <input type="text" placeholder="Start typing to search..." onChange={handleChange}/>
        </div>
    )
}
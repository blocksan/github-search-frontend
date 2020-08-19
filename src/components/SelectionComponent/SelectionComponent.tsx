import React from 'react'
import './SelectionComponent.scss'

export const SelectionComponent = () => {
    return (
        <div className="selectionComponent">
            <select>
                <option value="user" selected>User</option> 
                <option value="respository">Respository</option>
            </select>
        </div>
    )
}


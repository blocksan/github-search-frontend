import React, {useState, ChangeEvent} from 'react'
import { ISelectionComponent } from '../../shared/Interfaces/ISelectComponent';
import './SelectionComponent.scss'
import { EContentType } from '../../shared/Interfaces/IContent';

export const SelectionComponent = (props: ISelectionComponent) => {
    const {typeChangedEvent} = props;
    const [type, setType] = useState(EContentType.user)

    /**
     * Type change handler
     */
    const handleTypeChange =(e: ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.currentTarget;
        setType(value as EContentType)
        typeChangedEvent(value as EContentType)
    }

    return (
        <div className="selectionComponent">
            <select className="select-box" value={type} onChange={handleTypeChange}>
                <option value={EContentType.user}>User</option> 
                <option value={EContentType.respository}>Respository</option>
          </select>
        </div>
    )
}


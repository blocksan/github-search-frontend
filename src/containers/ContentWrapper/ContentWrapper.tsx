import React, { Component } from 'react'
import { IContentWrapperProps } from '../../shared/Interfaces'
import './ContentWrapper.scss';
import { RepositoryCardComponent } from '../../components/RepositoryCardComponent/RepositoryCardComponent';
import { UserCardComponent } from '../../components/UserCardComponent/UserCardComponent';


const ContentWrapper  = (props: IContentWrapperProps) => {
        return (
            <div className="contentWrapper">
                {[1,2,3,4,5,6,7,8,9].map(item => {
                   return <RepositoryCardComponent></RepositoryCardComponent>
                })}
                <UserCardComponent></UserCardComponent>
            </div>
        )
}

export {ContentWrapper} 

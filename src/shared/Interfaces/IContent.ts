import { IRepositoryCardProps } from "./IRepositoryCard";
import { IUserCardProps } from "./IUserCard";

export enum EContentType{
    user = 'Users',
    respository = 'Repositories'
}

export type TFetchContent = {
    type: EContentType
    page: number
    searchkey: string
}

export interface IContentProps{
    
}

export interface IContentReducer{
    fetchingContent: boolean;
    fetchingContentStatus: boolean;
    fetchingContentError: string | undefined;
    contentList: Array<IRepositoryCardProps|IUserCardProps>;
    type: EContentType;
    page: number
}

import { IRepositoryCardProps } from "./IRepositoryCard";
import { IUserCardProps } from "./IUserCard";
import { EContentType, TFetchContent } from "./IContent";

/**
 * Interface declaration for ContentWrapper
 * 
 */
export interface IContentWrapperProps{
    /**
     * List of contents
     * Repository content
     * User content
     */
    contents: Array<IRepositoryCardProps|IUserCardProps>;

    /**
     * Enum constraint for type of content
     * Users | Repositories
     */
    type: EContentType;

    /**
     * saerch key value, available via store
     */
    value: string;

    /**
     * Current page 
     */
    page: number

    loading: boolean;


    error: string | undefined;
    
    fetchContentDispatcher:(params: TFetchContent) => void
}
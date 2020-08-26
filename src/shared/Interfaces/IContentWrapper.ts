import { IRepositoryCardProps } from "./IRepositoryCard";
import { IUserCardProps } from "./IUserCard";
import { EContentType, TFetchContent } from "./IContent";
import { IUserTypeContent, IRespositoryTypeContent } from "./IResponseTypes";

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
    contents: Array<IUserTypeContent|IRespositoryTypeContent>;

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

    /**
     * Total number of pages available to fetch
     */
    totalPages: number;
    
    fetchContentDispatcher:(params: TFetchContent) => void
}
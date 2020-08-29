import { TFetchContent } from "./IContent";

export interface IHeaderWrapperProps{

    /**
     * @remarks
     * Dispatcher function to fetch the new contens
     */
    fetchContentDispatcher:(params: TFetchContent) => void
    
    /**
     * Total number of available pages
     */
    totalPages: number;

    /**
     * searchkey
     */
    value: string;
}
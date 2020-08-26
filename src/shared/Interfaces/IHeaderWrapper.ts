import { EContentType, TFetchContent } from "./IContent";
import { ISelectionComponent } from "./ISelectComponent";

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
     * Current rendered page
     */
    page: number;
}
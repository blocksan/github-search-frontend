import { EContentType } from "./IContent";

export type ISelectionComponent = {
    /**
     * Type Change handler function
     */
    typeChangedEvent: (type: EContentType) => void;
}
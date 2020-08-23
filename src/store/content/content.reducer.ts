import { IContentReducer } from "../../shared/Interfaces";
import { EContentType } from "../../shared/Interfaces/IContent";
import { IReducerAction } from "../../shared/Interfaces/IReducerAction";
import { actions } from "../../shared/utils/action";
import { __UserContents, __RepositoryContents } from "../../test/fixtures/contents";

/**
 * Content reducer
 * @remarks
 * Handles the content reducers and set the store
 */
const initialState: IContentReducer = {
    fetchingContent: false,
    contentList:[],
    fetchingContentError: undefined,
    fetchingContentStatus: false,
    type: EContentType.user,
    page: 1    
};

export const ContentReducer = (state = initialState, action: IReducerAction) => {
    switch (action.type) {
        case actions.FETCH_CONTENT:{
            const {loading} = action;
            console.log(action.contentType,'----action.contentType----')
            if(loading){
                return { ...state, fetchingContent: true, fetchingContentError: undefined, page: action.page, type: action.contentType};
            }
            if(action.status){
                /**
                 * Pagination content edge case
                 * @Remarks 
                 * Below will make sure that while infinite scrolling 
                 * if user is looking for new search then only latest content should be shown
                 * else list should be prepended by the previous result from the store
                 * 
                 */
                const contentList = action.page === 1 ? action.contentList : [...state.contentList,...action.contentList]
                return {
                    ...state,
                    page: action.page,
                    type: action.contentType,
                    fetchingContent: false, fetchingContentStatus: action.status, fetchingContentError: undefined, contentList
                }
            }
            return {
                ...state,
                fetchingContent: false,fetchingContentStatus: action.status,type: action.contentType, fetchingContentError: action.error,contentList:[]
            }
        }
        case actions.RESET_CONTENT:{
            const {loading} = action;
            if(loading){
                return { ...state, fetchingContent: true, fetchingContentError: undefined, contentList: [] };
            }
            if(action.status){
                return {
                    ...state,
                    fetchingContent: false, fetchingContentStatus: action.status, fetchingContentError: undefined, contentList: action.payload
                }
            }
            return {
                ...state,
                fetchingContent: false,fetchingContentStatus: action.status, fetchingContentError: action.error, contentList: []
            }
        }
        default:
            return state
    }
}
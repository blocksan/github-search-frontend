import {actions} from './../../shared/utils/action';
import { TFetchContent } from '../../shared/Interfaces';
import { loadingState, successState, failedState } from '../../shared/contants/__BaseAPI';
import { axiosInstance } from './../../shared/utils/axios'
import { __UserContents, __RepositoryContents } from '../../test/fixtures/contents';
import { IWindow } from '../../shared/Interfaces/IWindow';

let customWindow: Partial<IWindow> = window;
/**
 * Content action dispatchers
 * @remarks
 * Dispatch all the actions related to content
 */
const { FETCH_CONTENT } = actions;

/**
 * @remarks
 * Use to toggle the application left sidebar
 * @param toggleState - type of `{boolean}`
 */
export const fetchContentAction = (queryparams: TFetchContent) => {
    return async (dispatch: any) => {
        const { page, type, searchkey } = queryparams;
        dispatch({ ...loadingState, page: page, type: FETCH_CONTENT, contentType: type, });
        try {
            const result = await axiosInstance.post('api/content/fetch',{
                ...queryparams
            });
            
            
            // setTimeout(function(){
            //     if(value.length <= 3){
            //         return dispatch({
            //             ...successState,
            //             contentList: [],
            //             page,
            //             contentType: type,
            //             type: FETCH_CONTENT
            //         });
            //     }
            //     return dispatch({
            //         ...successState,
            //         contentList: type === EContentType.user ?  __UserContents : __RepositoryContents,
            //         page,
            //         contentType: type,
            //         type: FETCH_CONTENT
            //     });
            // },1000)
            console.log(result.data)
            if (result.data.status) {
                    return dispatch({
                    ...successState,
                    contentList: result.data.content.items,
                    page,
                    contentType: type,
                    type: FETCH_CONTENT
                });
            }
            // return dispatch({ ...failedState, error: "result.data.message", type: FETCH_CONTENT });
        } catch (err) {
            let error = { message: 'Exception in fetching the content' };
            if (err.response) {
                const { data } = err.response;
                error = { message: data.error|| data.message };
            }
            return dispatch({ ...failedState, error: error.message, type: FETCH_CONTENT });
        }
    };
};
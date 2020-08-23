import {actions} from './../../shared/utils/action';
import { TFetchContent } from '../../shared/Interfaces';
import { EContentType } from '../../shared/Interfaces/IContent';
import { loadingState, successState, failedState } from '../../shared/contants/__BaseAPI';
import { axiosInstance } from './../../shared/utils/axios'
import { __UserContents, __RepositoryContents } from '../../test/fixtures/contents';
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
export const fetchContentAction = (params: TFetchContent) => {
    return async (dispatch: any) => {
        const { page, type, value } = params;
        dispatch({ ...loadingState, page: page, type: FETCH_CONTENT, contentType: type, });
        try {
            // const result = await axiosInstance.get(``, {});
            
            setTimeout(function(){
                if(value.length <= 3){
                    return dispatch({
                        ...successState,
                        contentList: [],
                        page,
                        contentType: type,
                        type: FETCH_CONTENT
                    });
                }
                return dispatch({
                    ...successState,
                    contentList: type === EContentType.user ?  __UserContents : __RepositoryContents,
                    page,
                    contentType: type,
                    type: FETCH_CONTENT
                });
            },1000)
            // if (result.data.status) {
            // }
            // return dispatch({ ...failedState, error: "result.data.message", type: FETCH_CONTENT });
        } catch (err) {
            let error = { message: 'Exception in fetching the content' };
            if (err.response) {
                const { data } = err.response;
                error = { message: data.message };
            }
            return dispatch({ ...failedState, error: error.message, type: FETCH_CONTENT });
        }
    };
};
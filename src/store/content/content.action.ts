import { actions } from './../../shared/utils/action';
import { TFetchContent } from '../../shared/Interfaces';
import { loadingState, successState, failedState } from '../../shared/contants/__BaseAPI';
import { axiosInstance } from './../../shared/utils/axios'
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
export const fetchContentAction = (body: TFetchContent) => {
    return async (dispatch: any) => {
        const { page, type, searchkey } = body;
        dispatch({ ...loadingState, page: page, type: FETCH_CONTENT, contentType: type, searchkey });
        try {

            /**
             * If user change dropdown then content should be reset 
             */
            if (!searchkey || searchkey.length < 3) {
                return dispatch({
                    ...successState,
                    contentList: [],
                    page,
                    contentType: type,
                    searchkey,
                    totalPages: 0,
                    type: FETCH_CONTENT
                });
            }
            let finalResult;
            let key = `${page}-${searchkey}-${type}`
            const data = sessionStorage.getItem(key)
            if (!data) {
                const result = await axiosInstance.post('api/content/fetch', {
                    ...body
                });
                if (result.data.status) {
                    sessionStorage.setItem(key, JSON.stringify(result.data))
                    finalResult = result.data
                }else
                    return dispatch({ ...failedState, error: result.data.message, type: FETCH_CONTENT });
            } else {
                finalResult = JSON.parse(data)
            }
            const { content: { totalPages, items } } = finalResult
            return dispatch({
                ...successState,
                contentList: items,
                page,
                contentType: type,
                searchkey,
                totalPages,
                type: FETCH_CONTENT
            });
        } catch (err) {
            let error = { message: 'Exception in fetching the content' };
            if (err.response) {
                const { data } = err.response;
                error = { message: data.error || data.message };
            }
            return dispatch({ ...failedState, error: error.message, type: FETCH_CONTENT });
        }
    };
};
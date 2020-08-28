import {ContentReducer} from './../content.reducer';
import { actions as types } from './../../../shared/utils/action';
import { EContentType, TFetchContent } from '../../../shared/Interfaces/IContent';
import { __UserContents } from '../../../test/fixtures/contents';

const __InitialState = {
    fetchingContent: false,
    contentList:[],
    fetchingContentError: undefined,
    fetchingContentStatus: false,
    type: EContentType.user,
    page: 1  
};
const __InitialAction = {
    content: [],
    loading: false
};

const params: TFetchContent = {
    type: EContentType.user,
    page: 1,
    searchkey: ""
};

describe('FETCH_CONTENT reducer', () => {
    let initialState;
    beforeEach(() => {
        initialState = { ...__InitialState };
    });
    it('initial state for fetch content', () => {
        const action = { ...__InitialAction, loading: true, type: 'default' };
        expect(ContentReducer(initialState, action)).toEqual(initialState);
    });
    it('loading state for fetch content', () => {
        const action = {
            ...__InitialAction,
            loading: true,
            ...params,
            type: types.FETCH_CONTENT,
            contentType: params.type
        };
        const finalState = {
            ...initialState,
            fetchingContent: true, 
            fetchingContentError: undefined, 
            page: params.page,
            searchkey:"", 
            type: params.type

        };
        expect(ContentReducer(initialState, action)).toEqual(finalState);
    });
    it('success state for fetch content', () => {
        const action = {
            ...__InitialAction,
            loading: false,
            status: true,
            ...params,
            type: types.FETCH_CONTENT,
            page:1,
            contentList:[__UserContents],
            totalPages:20,
            contentType: params.type
        };
        const finalState = {
            ...initialState,
            page: params.page,
            type: action.contentType,
            searchkey: params.searchkey,
            totalPages: 20,
            fetchingContent: false, 
            fetchingContentStatus: action.status, 
            fetchingContentError: undefined, 
            contentList:action.contentList
        };
        expect(ContentReducer(initialState, action)).toEqual(finalState);
    });
    it('failure state for fetch content', () => {
        const error = 'Exception in fetching the content';
        const action = {
            ...__InitialAction,
            error,
            loading: false,
            status: false,
            ...params,
            type: types.FETCH_CONTENT,
            contentType: params.type
        };
        const finalState = {
            ...initialState,
            fetchingContent: false,
            fetchingContentStatus: action.status,
            type: action.contentType, 
            fetchingContentError: action.error,
            contentList:[]
        };
        expect(ContentReducer(initialState, action)).toEqual(finalState);
    });
});

describe('DEFAULT', () => {
    let initialState;
    beforeEach(() => {
        initialState = { ...__InitialState };
    });
    it('default', () => {
        const action = {
            ...__InitialAction,
        };
        const finalState = {
            ...initialState,
        };
        expect(ContentReducer(initialState, action)).toEqual(finalState);
    });
});

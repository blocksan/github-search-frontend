import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actions as types } from './../../../shared/utils/action';
import * as actions from './../content.action'
import { EContentType, TFetchContent } from '../../../shared/Interfaces/IContent';
import { loadingState, successState, failedState } from './../../../shared/contants/__BaseAPI';
import { __UserContents, __RepositoryContents } from '../../../test/fixtures/contents';


const mockStore = configureMockStore([thunk]);
describe('Content Action', () => {
    describe('Fetch action', () => {
        let sandbox;
        let server;
        beforeEach(() => {
            sandbox = sinon.createSandbox();
            server = sandbox.useFakeServer();
        });
        afterEach(() => {
            server.restore();
            sandbox.restore();
        });
        it('should return empty contents if searckey is empty ', done => {
            const params: TFetchContent = {
                type: EContentType.user,
                page: 1,
                searchkey: ""
            };

            const expectedActions = [
                { ...loadingState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey },
                { ...successState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey, totalPages: 0, contentList: [] },
            ];
            const store = mockStore({ content: {} });
            store
                .dispatch(actions.fetchContentAction(params))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                })
                .then(done, done);
        });
        it('should return empty contents if searckey length less than 3 ', done => {
            const params: TFetchContent = {
                type: EContentType.user,
                page: 1,
                searchkey: "ab"
            };

            const expectedActions = [
                { ...loadingState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey },
                { ...successState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey, totalPages: 0, contentList: [] },
            ];
            const store = mockStore({ content: {} });
            store
                .dispatch(actions.fetchContentAction(params))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                })
                .then(done, done);
        });
        it('should return user contents if usertype is passed as body params', done => {
            const params: TFetchContent = {
                type: EContentType.user,
                page: 1,
                searchkey: "abc"
            };
            const totalPages = 20;
            const key = `${params.page}-${params.searchkey}-${params.type}`
            const expectedActions = [
                { ...loadingState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey },
                { ...successState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey, totalPages, contentList: __UserContents },
            ];
            const store = mockStore({ content: {} });
            store
                .dispatch(actions.fetchContentAction(params))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                })
                .then(done, done);
            setTimeout(
                () =>
                    server.respond([
                        200,
                        { 'Content-Type': 'application/json' },
                        JSON.stringify({ content: { items: __UserContents, totalPages }, status: true }),
                    ]),
                0,
            );
        });

        it('should return repository contents if usertype is passed as body params', done => {
            const params: TFetchContent = {
                type: EContentType.respository,
                page: 1,
                searchkey: "abc"
            };
            const totalPages = 20;
            const key = `${params.page}-${params.searchkey}-${params.type}`
            spyOn(sessionStorage,'getItem').and.callFake( (key:string):String => {
                return null;
            });
            const expectedActions = [
                { ...loadingState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey },
                { ...successState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey, totalPages, contentList: __RepositoryContents },
            ];
            const store = mockStore({ content: {} });
            store
                .dispatch(actions.fetchContentAction(params))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                })
                .then(done, done);
            setTimeout(
                () =>
                    server.respond([
                        200,
                        { 'Content-Type': 'application/json' },
                        JSON.stringify({ content: { items: __RepositoryContents, totalPages }, status: true }),
                    ]),
                0,
            );
        });

        it('should throw exception if anything goes wrong', done => {
            const params: TFetchContent = {
                type: EContentType.respository,
                page: 1,
                searchkey: "abcd"
            };
            const error = 'Exception in fetching the content'
            const totalPages = 20;
            const key = `${params.page}-${params.searchkey}-${params.type}`
            const expectedActions = [
                { ...loadingState, type: types.FETCH_CONTENT, page: params.page, contentType: params.type, searchkey: params.searchkey },
                { ...failedState, type: types.FETCH_CONTENT, error },
            ];
            const store = mockStore({ content: {} });
            spyOn(sessionStorage,'getItem').and.callFake( (key:string):String => {
                return null;
            });
            store
                .dispatch(actions.fetchContentAction(params))
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions);
                })
                .then(done, done);
            setTimeout(
                () =>
                    server.respond([
                        400,
                        { 'Content-Type': 'application/json' },
                        JSON.stringify({ message: error, status: false }),
                    ]),
                0,
            );
        });

    });

})
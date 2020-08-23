export interface IBaseApiState {
    loading: boolean;
    status: boolean;
    payload: object;
}

export interface IBaseApiError {
    error: string
}
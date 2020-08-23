import { IBaseApiState } from "../Interfaces";

export const loadingState: Partial<IBaseApiState> = {
    loading: true,
    status: false,
};
export const successState: Partial<IBaseApiState> = {
    loading: false,
    status: true,
};
export const failedState: Partial<IBaseApiState> = {
    loading: false,
    status: false,
};

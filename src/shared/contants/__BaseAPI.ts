import { IBaseApiState } from "../Interfaces";

/**
 * Reusable Base API states for different actions 
 */
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

import axios from 'axios';

import { IWindow } from './../Interfaces/IWindow';

const customWindow: Partial<IWindow> = window;

if (!customWindow || !customWindow.config || !customWindow.config.baseUrl) {
    throw new Error('Configured base url required to create an axios connection');
}

export const axiosInstance = axios.create({
    baseURL: customWindow.config.baseUrl,
});

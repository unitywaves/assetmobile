export const NAME = 'auth';

//Redux Action Types
export const LOGGED_IN = 'auth/LOGGED_IN';
export const LOGGED_OUT = 'auth/LOGGED_OUT';

//API URL
export const API_URL = 'https://reqres.in/api';

//API End Points
export const REGISTER = `${API_URL}/register`;
export const LOGIN = `${API_URL}/login`;
export const LOGOUT = `${API_URL}/logout`;
export const FORGOT_PASSWORD = `${API_URL}/forgot`;

export const TOKEN_KEY = '@token';
export const USER_KEY = '@user';
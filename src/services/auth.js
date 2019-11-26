export const TOKEN_KEY = "@chat-Token";
export const USER_KEY = "@auth-user"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getAuthUser = () => localStorage.getItem(USER_KEY);

export const setAuthUser = user => {
  localStorage.setItem(USER_KEY, user);
};

export const removeAuthUser = () => {
  localStorage.removeItem(USER_KEY);
};
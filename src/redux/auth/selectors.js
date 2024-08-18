// Файл /src/redux/auth/selectors.js

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserName = (state) => state.auth.user?.name; // Додаємо цю функцію
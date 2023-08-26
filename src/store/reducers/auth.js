import { createSlice } from "@reduxjs/toolkit";

let logins = JSON.parse(localStorage.getItem("logins"));
if (logins === null) {
  logins = [];
}

const initialState = {
  users: logins,
  isAuth: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRegistration: (state, payload) => {
      if (payload.payload.password.length < 4) {
        alert("Пароль меньше 4х символов");
      } else {
        let flag = false;
        for (let i = 0; i < logins.length; i++) {
          if (
            logins[i].login === payload.payload.login &&
            logins[i].password === payload.payload.password
          ) {
            flag = true;
            break;
          }
        }
        if (flag) {
          console.log("User exit already!");
        } else {
          state.users.push({
            login: payload.payload.login,
            password: payload.payload.password,
          });
        }
      }
      // state.isAuth = true;
    },
    authLogin: (state, payload) => {
      // Поиск по массиву юзеров - если есть, то:
      for (let i = 0; i < state.users.length; i++) {
        if (
          state.users[i].login === payload.payload.login &&
          state.users[i].password === payload.payload.password
        ) {
          state.isAuth = true;
          break;
        }
      }
    },
    authLogout: (state, payload) => {
      state.isAuth = false;
    },
  },
});

export const { authRegistration, authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer;

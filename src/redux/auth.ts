import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import UserApi from "./apis/users";
import { User } from "../types/users";

// actions
export const login = createAsyncThunk("auth/login", async () => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    return JSON.parse(currentUser);
  }

  const user = await UserApi.login();

  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
});

// reducer
export interface AuthState {
  currentUser?: User | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  currentUser: null,
  status: "idle",
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.status = "loading";
    })
    .addCase(login.fulfilled, (state, action) => {
      state.status = "idle";
      state.currentUser = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.status = "failed";
    });
});

// selectors
export const selectAuth = (state: RootState) => state.rootReducer.authData;

export default authReducer;

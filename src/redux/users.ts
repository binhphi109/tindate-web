import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import UserApi from "./apis/users";
import { User, UserAction } from "../types/users";

// actions
export const getDiscover = createAsyncThunk("users/discover", async (userId: string) => {
  const users = await UserApi.getDiscover(userId);
  return users;
});

export const likeUser = createAsyncThunk(
  "users/like",
  async ({ userFromId, userToId }: UserAction) => {
    const result = await UserApi.like(userFromId, userToId);
    return result;
  }
);

export const passUser = createAsyncThunk(
  "users/pass",
  async ({ userFromId, userToId }: UserAction) => {
    const result = await UserApi.pass(userFromId, userToId);
    return result;
  }
);

// reducer
export interface UserState {
  users: User[];
  status: "idle" | "loading" | "failed";
  error: string | null | undefined;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  // getDiscover
  builder
    .addCase(getDiscover.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getDiscover.fulfilled, (state, action) => {
      state.status = "idle";
      state.users = action.payload;
    })
    .addCase(getDiscover.rejected, (state) => {
      state.status = "failed";
    });
});

// selectors
export const selectUsers = (state: RootState) => state.rootReducer.userData;

export default userReducer;

import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import UserApi from "../services/users";
import { User } from "../types/users";

// actions
export const fetchLikes = createAsyncThunk("likes/fetchLikes", async (userId: string) => {
  const users = await UserApi.fetchLikes(userId);
  return users;
});

// reducer
export interface LikesState {
  likes: User[];
  status: "idle" | "loading" | "failed";
}

const initialState: LikesState = {
  likes: [],
  status: "idle",
};

export const likesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLikes.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchLikes.fulfilled, (state, action) => {
      state.status = "idle";
      state.likes = action.payload;
    })
    .addCase(fetchLikes.rejected, (state) => {
      state.status = "failed";
    });
});

// selectors
export const selectLikes = (state: RootState) => state.rootReducer.likeData;

export default likesReducer;

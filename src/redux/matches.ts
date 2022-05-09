import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import UserApi from "./apis/users";
import { User } from "../types/users";

// actions
export const fetchMatches = createAsyncThunk("matches/fetchMatches", async (userId: string) => {
  const users = await UserApi.fetchMatches(userId);
  return users;
});

// reducer
export interface MatchesState {
  matches: User[];
  status: "idle" | "loading" | "failed";
}

const initialState: MatchesState = {
  matches: [],
  status: "idle",
};

export const matchesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMatches.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchMatches.fulfilled, (state, action) => {
      state.status = "idle";
      state.matches = action.payload;
    })
    .addCase(fetchMatches.rejected, (state) => {
      state.status = "failed";
    });
});

// selectors
export const selectMatches = (state: RootState) => state.rootReducer.matchData;

export default matchesReducer;

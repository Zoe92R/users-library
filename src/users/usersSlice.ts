import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { getUsersDataToSave } from "../utils/utilsFunctions";
import { UserDataType } from "../utils/types";

export const getUsers = createAsyncThunk(
  "users/get",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      return data.results;
    } catch (error) {
      const err = error as AxiosError<string>;
      if (!err.response) {
        throw error;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [] as any,
    loading: false,
    isSuccess: false,
  },
  reducers: {
    editUser: (state, action) => {
      const updatedUser = action.payload.values;
      const userIndex = state.data.findIndex(
        (user: UserDataType) => user.id.value === action.payload.id
      );
      const user = state.data.find(
        (user: UserDataType) => user.id.value === action.payload.id
      );
      if (userIndex >= 0) {
        state.data[userIndex] = { ...user, ...updatedUser };
      }
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter(
        (user: UserDataType) => user.id.value !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = getUsersDataToSave(payload);
        state.isSuccess = true;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
      });
  },
});

export const { editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

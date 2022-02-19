import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { authHeader } from "../../../utils/authHeader";

interface UserUpdateState {
  loading: boolean;
  uploaded: boolean;
  error: string | null;
}

interface UserData {
  userId: string;
  username: string;
  bio: string;
  email: string;
  avatar: string;
}

const UserState: UserUpdateState = {
  loading: false,
  uploaded: false,
  error: null,
};

const baseUrl: string = "http://localhost:8000/api/v1/";

export const updateUser = createAsyncThunk(
  "auth/login",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.patch(
        `${baseUrl}users/${userData.userId}`,
        userData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: UserState,
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.uploaded = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.uploaded = false;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.loading = false;
      state.uploaded = true;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
      state.uploaded = false;
      state.error = "Error updating user";
    });
  },
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;

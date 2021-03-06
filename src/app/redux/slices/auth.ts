import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  isRegistered: boolean;
  loading: boolean;
  isLoggedIn: boolean;
  user: {
    userId: string;
    username: string;
  } | null;
}

interface UserData {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const baseUrl: string = "https://animalkgdm.herokuapp.com/api/v1/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: UserData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}auth/register`, userData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    userData: Omit<UserData, "email" | "cpassword">,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseUrl}auth/login`, userData);
      document.cookie = `token=${response.data.token}`;
      // localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export const logOutUser = createAsyncThunk("auth/logout", () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});

const initialState: AuthState = {
  isRegistered: false,
  loading: false,
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isRegistered = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isRegistered = true;
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.isRegistered = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(logOutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logOutUser.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { clearState } = authSlice.actions;
export default authSlice.reducer;

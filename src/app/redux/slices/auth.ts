import {
  createSlice,
  // createAsyncThunk
} from "@reduxjs/toolkit";
// import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isAuthenticated = false;
    },
  },
});
export const { clearState } = authSlice.actions;
export default authSlice.reducer;

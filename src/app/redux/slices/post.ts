import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { Media } from "../../../interfaces";
import { authHeader } from "../../../utils/authHeader";

interface PostSliceState {
  loading: boolean;
  uploaded: boolean;
  error: string | null;
}

interface Post {
  userId: string;
  username: string;
  words: string;
  media: Media[];
}

const initialState: PostSliceState = {
  loading: false,
  uploaded: false,
  error: null,
};

const baseUrl: string = "http://localhost:8000/api/v1/";

export const uploadPost = createAsyncThunk(
  "post/upload",
  async (postData: Post, { rejectWithValue }) => {
    const { userId, username, words, media } = postData;
    const formData = {
      userId,
      username,
      words,
      media,
    };
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.post(`${baseUrl}posts`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearState: (state) => {
      state.error = null;
      state.uploaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadPost.fulfilled, (state) => {
      state.loading = false;
      state.uploaded = true;
    });
    builder.addCase(uploadPost.rejected, (state) => {
      state.loading = false;
      state.uploaded = false;
      state.error = "Something went wrong";
    });
  },
});
export const { clearState } = postSlice.actions;
export default postSlice.reducer;

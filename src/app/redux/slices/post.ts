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

interface Like {
  userId: string;
  postId: string;
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

export const likePost = createAsyncThunk(
  "post/like",
  async (likeData: Like, { rejectWithValue }) => {
    const { userId, postId } = likeData;
    const formData = {
      userId,
      postId,
    };
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.post(`${baseUrl}posts/like`, formData, {
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
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(likePost.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(likePost.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { clearState } = postSlice.actions;
export default postSlice.reducer;

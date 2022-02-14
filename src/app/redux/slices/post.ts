import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

import { Media } from "../../../interfaces";
import { authHeader } from "../../../utils/authHeader";

interface PostSliceState {
  loading: boolean;
  removeLoading: boolean;
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

interface Comment extends Like {
  username: string;
  text: string;
}

const initialState: PostSliceState = {
  loading: false,
  removeLoading: false,
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

export const unlikePost = createAsyncThunk(
  "post/unlike",
  async (likeData: Like, { rejectWithValue }) => {
    const { userId, postId } = likeData;
    const formData = {
      userId,
      postId,
    };
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.post(`${baseUrl}posts/unlike`, formData, {
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

export const addComment = createAsyncThunk(
  "post/addComment",
  async (commentData: Comment, { rejectWithValue }) => {
    const { userId, username, postId, text } = commentData;
    const formData = {
      userId,
      username,
      postId,
      text,
    };
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.post(`${baseUrl}posts/comment`, formData, {
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

interface RemoveComment {
  postId: string;
  commentId: string;
}

export const removeComment = createAsyncThunk(
  "post/removeComment",
  async (commentData: RemoveComment, { rejectWithValue }) => {
    const { postId, commentId } = commentData;
    try {
      authHeader(Cookies.get("token")!);
      const response = await axios.patch(
        `${baseUrl}posts/comment/${postId}`,
        { commentId },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
    builder.addCase(unlikePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(unlikePost.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(unlikePost.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addComment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addComment.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addComment.rejected, (state) => {
      state.loading = false;
      state.error = "Could not add comment.";
    });
    builder.addCase(removeComment.pending, (state) => {
      state.removeLoading = true;
      state.error = null;
    });
    builder.addCase(removeComment.fulfilled, (state) => {
      state.removeLoading = false;
    });
    builder.addCase(removeComment.rejected, (state) => {
      state.removeLoading = false;
      state.error = "Could not add comment.";
    });
  },
});
export const { clearState } = postSlice.actions;
export default postSlice.reducer;

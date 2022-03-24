import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";

import { authHeader } from "../utils/authHeader";
import { PostProps, User } from "../interfaces";

const baseUrl = "https://animalkgdm.herokuapp.com/api/v1";

export const usePosts = () => {
  const fetcher = async (url: string) => {
    authHeader(Cookies.get("token")!);
    const response = await axios.get(url);
    return response.data;
  };
  const { data, error } = useSWR(`${baseUrl}/posts`, fetcher, {
    refreshInterval: 1000,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404 || error.status === 400) return;
      if (retryCount >= 10) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });

  return {
    posts: data?.posts as PostProps[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePost = (postId: string) => {
  const fetchById = async (url: string) => {
    authHeader(Cookies.get("token")!);
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR(
    [`${baseUrl}/posts/${postId}`, postId],
    fetchById,
    {
      refreshInterval: 1000,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return {
    post: data?.post as PostProps,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useIndividualPosts = (userId: string) => {
  const fetchPostsById = async (url: string) => {
    authHeader(Cookies.get("token")!);
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR(
    [`${baseUrl}/posts/user/${userId}`, userId],
    fetchPostsById,
    {
      refreshInterval: 1000,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return {
    posts: data?.posts as PostProps[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useIndividualMediaPosts = (userId: string) => {
  const fetchPostsById = async (url: string) => {
    authHeader(Cookies.get("token")!);
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR(
    [`${baseUrl}/posts/usermedia/${userId}`, userId],
    fetchPostsById,
    {
      refreshInterval: 1000,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return {
    media: data?.posts as PostProps[],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useUser = (userId: string) => {
  const fetchById = async (url: string) => {
    authHeader(Cookies.get("token")!);
    const response = await axios.get(url);
    return response.data;
  };

  const { data, error } = useSWR(
    [`${baseUrl}/users/${userId}`, userId],
    fetchById,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404 || error.status === 400) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return {
    user: data?.user as User,
    isLoading: !error && !data,
    isError: error,
  };
};

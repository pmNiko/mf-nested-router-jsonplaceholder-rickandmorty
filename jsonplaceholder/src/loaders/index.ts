import {
  useGetComments,
  useGetPosts,
  useGetTodos,
  useGetUsers,
} from "../api/JsonPlacecholder";

export const loaderTodos = () => useGetTodos();
export const loaderPosts = () => useGetPosts();
export const loaderComments = () => useGetComments();
export const loaderUsers = () => useGetUsers();

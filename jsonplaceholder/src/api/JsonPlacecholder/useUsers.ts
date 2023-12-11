import { UserResponse } from "../../interfaces/JsonPlaceholderApi/Users";
import { useGetJsonPlaceholder } from "./commons";

export const useGetUsers = async (quantity?: number) => {
  return (await useGetJsonPlaceholder(
    `/users?_limit=${quantity ?? 5}`
  )) as UserResponse[];
};

export const useGetUserByID = async (id: string) => {
  return (await useGetJsonPlaceholder(`/users/${id}`)) as UserResponse;
};

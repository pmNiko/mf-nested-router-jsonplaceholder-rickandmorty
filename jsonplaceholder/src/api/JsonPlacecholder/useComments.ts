import { CommentResponse } from "../../interfaces/JsonPlaceholderApi/Comments";
import { useGetJsonPlaceholder } from "./commons";

export const useGetComments = async (query?: string) => {
  return (await useGetJsonPlaceholder(
    query ?? "/comments?_limit=5"
  )) as CommentResponse[];
};

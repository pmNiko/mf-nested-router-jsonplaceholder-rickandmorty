import { TodoResponse } from "../../interfaces/JsonPlaceholderApi/Todos";
import { useGetJsonPlaceholder } from "./commons";

export const useGetTodos = async (quantity?: number) => {
  return (await useGetJsonPlaceholder(
    `/todos?_limit=${quantity ?? 5}`
  )) as TodoResponse[];
};

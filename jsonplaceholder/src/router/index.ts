export enum Paths {
  INDEX = "/jsonplaceholder",
  TODOS = "todos",
  POSTS = "posts",
  COMMENTS = "comments",
  USERS = "users",
}

export const Routes = {
  index: {
    label: "Home",
    routerPath: Paths.INDEX,
  },
  todos: {
    label: "Tareas",
    routerPath: Paths.TODOS,
    absolutePath: Paths.INDEX + "/" + Paths.TODOS,
  },
  posts: {
    label: "Posts",
    routerPath: Paths.POSTS,
    absolutePath: Paths.INDEX + "/" + Paths.POSTS,
  },
  comments: {
    label: "Comentarios",
    routerPath: Paths.COMMENTS,
    absolutePath: Paths.INDEX + "/" + Paths.COMMENTS,
  },
  users: {
    label: "Usuarios",
    routerPath: Paths.USERS,
    absolutePath: Paths.INDEX + "/" + Paths.USERS,
  },
};

import { Suspense } from "react";
import "./App.css";
import ShellRouter from "./router/ShellBlog";

function App() {
  return (
    <Suspense fallback={"LOADING..."}>
      <ShellRouter />
    </Suspense>
  );
}

export default App;

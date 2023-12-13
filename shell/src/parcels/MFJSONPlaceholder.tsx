import { Suspense, lazy } from "react";
import { Routes } from "../router";
import { WithErrorBoundary } from "../components/WithErrorBoundary";

const RouterJSONPlaceholder = lazy(
  () => import("mf-jsonplaceholder/RouterJSONPlaceholder")
);

export default () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <WithErrorBoundary>
        <RouterJSONPlaceholder pathname={Routes.index.routerPath} />
      </WithErrorBoundary>
    </Suspense>
  );
};

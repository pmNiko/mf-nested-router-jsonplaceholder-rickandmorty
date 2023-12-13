import { Suspense, lazy } from "react";
import { Routes } from "../router";
import { WithErrorBoundary } from "../components/WithErrorBoundary";

const RickAndMortyRouter = lazy(
  () => import("mf-rickandmorty/RickAndMortyRouter")
);

export default () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <WithErrorBoundary>
        <RickAndMortyRouter pathname={Routes.index.routerPath} />
      </WithErrorBoundary>
    </Suspense>
  );
};

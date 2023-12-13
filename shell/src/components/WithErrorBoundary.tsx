import { ErrorBoundary } from "react-error-boundary";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const WithErrorBoundary = ({ children }: Props) => {
  return (
    <ErrorBoundary
      fallback={
        <p style={{ color: "black" }}>
          El recurso no se encuentra disponible!{" "}
        </p>
      }
    >
      {children}
    </ErrorBoundary>
  );
};

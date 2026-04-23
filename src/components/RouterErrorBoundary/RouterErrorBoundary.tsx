import { isRouteErrorResponse, useRouteError } from 'react-router';

const RouterErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.status} {error.statusText}
      </div>
    );
  }
  return <div>RouterErrorBoundary</div>;
};

export default RouterErrorBoundary;

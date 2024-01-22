import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
	const error = useRouteError();

	// @ts-ignore
	return <h1>{error}</h1>;
};

export default ErrorBoundary;
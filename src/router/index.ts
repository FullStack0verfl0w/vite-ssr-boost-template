import { TRouteObject } from "@lomray/vite-ssr-boost/interfaces/route-object";
import ErrorBoundary from "./error.tsx";
import AppLayout from "./layout.tsx";
import Index from "./pages/Index";
import Redirect from "./redirect.tsx";

const routes: TRouteObject[] = [
	{
		path: "/",
		Component: Redirect,
	},
	{
		path: "/:lang",
		ErrorBoundary,
		Component: AppLayout,
		children: [
			{
				index: true,
				Component: Index,
			},
			{
				path: "user",
				lazy: () => import("./pages/User")
			}
		]
	},
];

export default routes;
import React, { PropsWithChildren, StrictMode } from "react";
import App from "./App.tsx";

const AppStrict = (props: PropsWithChildren) => (
	<StrictMode>
		<App {...props} />
	</StrictMode>
);
export default AppStrict;
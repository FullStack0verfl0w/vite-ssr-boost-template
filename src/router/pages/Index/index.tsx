import React from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactLogo from "../../../assets/react.svg";
import "./index.css";

const IndexPage = () => {
	const { lang } = useParams();

	return (
		<>
			<h1>Hello world {lang}</h1>
			<img src={ReactLogo} alt="React Logo" />
			<NavLink to="/en/user">User page</NavLink>
		</>
	);
};

export default IndexPage;
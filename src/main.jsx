import React from "react";
import ReactDOM from "react-dom/client";
import { Home, App, AboutUs, ContactUs, MyPath, Github } from "./index.js";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import "./index.css";
import { Gitinfo } from "./Components/Github/Github.jsx";

// Router setup
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<AboutUs />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="user/:userid" element={<MyPath />} />
			<Route path="/github" loader={Gitinfo} element={<Github />} />
		</Route>
	)
);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

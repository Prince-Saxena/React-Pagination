import React from "react";
import { createRoot } from "react-dom/client";
import { Home, App, AboutUs, ContactUs, MyPath, Github } from "./index.js";
import {
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import "./index.css";
import { Gitinfo } from "./Components/Github/Github.jsx";

// Router setup using HashRouter
const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<AboutUs />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="user/:userid" element={<MyPath />} />
			<Route path="/github" loader={Gitinfo} element={<Github />} />
		</Route>
	)
);

// Render the app
createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

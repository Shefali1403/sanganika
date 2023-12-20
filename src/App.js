import React from "react";
import Homepage from "./Pages/Homepage";
import Academics from "./Pages/Academics";
import Alumni from "./Pages/Alumni";
import Achievement from "./Pages/Achievement";
import Events from "./Pages/Events";
import Team from "./Pages/Team";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* This route will direct to the homepage  */}
					<Route path="/" element={<Homepage />} />
					{/* This route will direct to the Academics  */}
					<Route path="/academic" element={<Academics />} />
					{/* This route will direct to the Events page  */}
					<Route path="/event" element={<Events />} />
					{/* This page will direct to the Alumni page  */}
					<Route path="/alumni" element={<Alumni />} />
					{/* This route will direct to the Team page  */}
					<Route path="/team" element={<Team />} />
					{/* This route will direct to the Achievement page  */}
					<Route path="/achievement" element={<Achievement />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};
export default App;

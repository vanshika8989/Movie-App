import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Details from "./components/Details";
import { FaFilm} from "react-icons/fa"
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Router, Routes } from "react-router";
import RegistrationForm from "./components/Register";



function App() {
const [state, setState] = useState({
	s: "sherlock",
	results: [],
	selected: {},
});

const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

const searchInput = (e) => {
	let s = e.target.value;

	setState((prevState) => {
	return { ...prevState, s: s };
	});
};

const search = (e) => {
	if (e.key === "Enter") {
	axios(apiurl + "&s=" + state.s).then(({ data }) => {
		let results = data.Search;

		console.log(results);

		setState((prevState) => {
		return { ...prevState, results: results };
		});
	});
	}
};

const openDetail = (id) => {
	axios(apiurl + "&i=" + id).then(({ data }) => {
	let result = data;

	setState((prevState) => {
		return { ...prevState, selected: result };
	});
	});
};

const closeDetail = () => {
	setState((prevState) => {
	return { ...prevState, selected: {} };
	});
};

return (
	<div className="App">
	<header className="App-header">
		<h1>Book My Movie <FaFilm/></h1>
		</header>
		

		
	<main>
		<Search searchInput={searchInput} search={search} />

		<Results results={state.results} openDetail={openDetail} />

		{typeof state.selected.Title != "undefined" ? (
		<Details selected={state.selected} closeDetail={closeDetail} />
		) : (
		false
		)}
	</main>

	
	</div>
);
}

export default App;

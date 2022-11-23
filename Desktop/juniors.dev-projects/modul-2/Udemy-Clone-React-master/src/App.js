import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";

function App() {
  return (
	<div className="app">
		<Header />
		<HomeContent />
		<HomeFooter />
	</div>	
  );
}

export default App;

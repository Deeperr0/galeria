import "./App.css";
import dataJson from "../public/data.json";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
function App() {
	return (
		<>
			<Navbar />
			<Home dataJson={dataJson} />
		</>
	);
}

export default App;

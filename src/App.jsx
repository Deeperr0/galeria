import "./App.css";
import dataJson from "../public/data.json";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./Gallery";
function App() {
	return (
		<>
			<Navbar />
			<Gallery dataJson={dataJson} />
		</>
	);
}

export default App;

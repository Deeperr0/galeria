import "./App.css";
import dataJson from "./assets/data.json";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./Gallery";
import { createContext, lazy, Suspense, useState } from "react";
const Slideshow = lazy(() => import("./Slideshow"));
export const ToggleSlideshowContext = createContext(null);
function App() {
	const [toggleSlideshow, setToggleSlideshow] = useState();

	return (
		<>
			<Suspense
				fallback={
					<div className="h-screen w-screen flex items-center justify-center">
						Loading...
					</div>
				}
			>
				<ToggleSlideshowContext.Provider
					value={{ toggleSlideshow, setToggleSlideshow }}
				>
					<Navbar />
					{!toggleSlideshow ? (
						<Gallery dataJson={dataJson} />
					) : (
						<Slideshow dataJson={dataJson} />
					)}
				</ToggleSlideshowContext.Provider>
			</Suspense>
		</>
	);
}

export default App;

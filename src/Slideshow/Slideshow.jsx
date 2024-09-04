import { useState } from "react";
import SlideshowCard from "../SlideshowCard";
import PropTypes from "prop-types";
export default function Slideshow({ dataJson }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className="w-full h-full">
			<SlideshowCard
				index={currentIndex}
				name={dataJson[currentIndex].name}
				artist={dataJson[currentIndex].artist}
				images={dataJson[currentIndex].images}
				year={dataJson[currentIndex].year}
				description={dataJson[currentIndex].description}
				source={dataJson[currentIndex].source}
				setCurrentIndex={setCurrentIndex}
			/>
		</div>
	);
}

Slideshow.propTypes = {
	dataJson: PropTypes.array.isRequired,
};

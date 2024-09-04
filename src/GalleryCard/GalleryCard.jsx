import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
export default function GalleryCard({ name, artist, images, height }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const containerRef = useRef(null);
	const [imageWidth, setImageWidth] = useState(400); // Default width
	const cardStyle = {
		"--card-height": height,
	};
	useEffect(() => {
		// Set dynamic width based on container size
		const updateWidth = () => {
			if (containerRef.current) {
				setImageWidth(containerRef.current.offsetWidth);
			}
		};

		// Update width on component mount and window resize
		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => window.removeEventListener("resize", updateWidth);
	}, []);
	// Handle image load event
	useEffect(() => {
		const img = new Image();
		img.src = images.thumbnail;

		// Handle image loading
		img.onload = () => {
			setIsLoaded(true);
		};

		// Cleanup function to avoid memory leaks
		return () => {
			img.onload = null;
		};
	}, [images.thumbnail]);

	return (
		<div
			ref={containerRef}
			key={name}
			className={`w-11/12 relative block md:w-full card overflow-hidden group hover:cursor-pointer`}
			style={cardStyle}
		>
			{isLoaded && (
				<img
					src={images.thumbnail}
					alt={name}
					className="w-full h-full object-cover object-center group-hover:opacity-50"
					height={height}
					loading="lazy"
				/>
			)}
			{!isLoaded && (
				<Blurhash
					hash={images.blurHash}
					width={imageWidth}
					height={height}
					resolutionX={32}
					resolutionY={32}
					punch={1}
				/>
			)}

			<div className="absolute text-white bottom-0 left-0 py-8 px-8 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)] w-full">
				<h1 className="font-libre font-bold text-2xl">{name}</h1>
				<p className="font-libre text-[13px] font-normal leading-4 opacity-75 mt-[6px]">
					{artist.name}
				</p>
			</div>
		</div>
	);
}
GalleryCard.propTypes = {
	name: PropTypes.string.isRequired,
	artist: PropTypes.object.isRequired,
	images: PropTypes.object.isRequired,
	height: PropTypes.string,
};

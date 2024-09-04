import PropTypes from "prop-types";
export default function SlideshowCard({ name, artist, images, height }) {
	const cardStyle = {
		"--card-height": height,
	};
	return (
		<div
			key={name}
			className={`w-11/12 relative block md:w-full card overflow-hidden`}
			style={cardStyle}
		>
			<img
				src={images.gallery}
				alt={name}
				className="w-full h-full object-cover object-center"
			/>
			<div className="absolute text-white bottom-0 left-0 py-8 px-8 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)] w-full">
				<h1 className="font-libre font-bold text-2xl">{name}</h1>
				<p className="font-libre text-[13px] font-normal leading-4 opacity-75 mt-[6px]">
					{artist.name}
				</p>
			</div>
		</div>
	);
}
SlideshowCard.propTypes = {
	name: PropTypes.string.isRequired,
	artist: PropTypes.object.isRequired,
	images: PropTypes.object.isRequired,
	height: PropTypes.string,
};

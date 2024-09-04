import PropTypes from "prop-types";
import SlideshowCard from "../SlideshowCard";

export default function Home({ dataJson }) {
	const sizes = [
		{ height: "250px" },
		{ height: "400px" },
		{ height: "285px" },
		{ height: "250px" },
		{ height: "340px" },
		{ height: "280px" },
		{ height: "500px" },
		{ height: "250px" },
		{ height: "420px" },
		{ height: "260px" },
		{ height: "430px" },
		{ height: "260px" },
		{ height: "330px" },
		{ height: "525px" },
		{ height: "340px" },
	];
	const firstColumn = [
		{ ...dataJson[0], index: 0 },
		{ ...dataJson[2], index: 2 },
		{ ...dataJson[4], index: 4 },
		{ ...dataJson[6], index: 6 },
		{ ...dataJson[8], index: 8 },
		{ ...dataJson[11], index: 11 },
		{ ...dataJson[13], index: 13 },
	];
	const secondColumn = [
		{ ...dataJson[1], index: 1 },
		{ ...dataJson[3], index: 3 },
		{ ...dataJson[5], index: 5 },
		{ ...dataJson[7], index: 7 },
		{ ...dataJson[9], index: 9 },
		{ ...dataJson[10], index: 10 },
		{ ...dataJson[12], index: 12 },
		{ ...dataJson[14], index: 14 },
	];
	const firstColumnDesktop = [
		{ ...dataJson[0], index: 0 },
		{ ...dataJson[4], index: 4 },
		{ ...dataJson[8], index: 8 },
		{ ...dataJson[11], index: 11 },
	];
	const secondColumnDesktop = [
		{ ...dataJson[1], index: 1 },
		{ ...dataJson[5], index: 5 },
		{ ...dataJson[9], index: 9 },
		{ ...dataJson[12], index: 12 },
	];
	const thirdColumnDesktop = [
		{ ...dataJson[2], index: 2 },
		{ ...dataJson[6], index: 6 },
		{ ...dataJson[13], index: 13 },
	];
	const fourthColumnDesktop = [
		{ ...dataJson[3], index: 3 },
		{ ...dataJson[7], index: 7 },
		{ ...dataJson[10], index: 10 },
		{ ...dataJson[14], index: 14 },
	];
	return (
		<div>
			<div className="hidden lg:grid grid-cols-4 gap-10 px-10 py-10">
				<div className="grid gap-10">
					{firstColumnDesktop.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{secondColumnDesktop.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{thirdColumnDesktop.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{fourthColumnDesktop.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
			</div>
			<div className="hidden lg:hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 px-10 py-10">
				<div className="grid gap-10">
					{firstColumn.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
				<div className="grid gap-10">
					{secondColumn.map((item, index) => (
						<SlideshowCard
							key={index}
							name={item.name}
							artist={item.artist}
							images={item.images}
							height={sizes[item.index].height}
						/>
					))}
				</div>
			</div>
			<div className="w-full flex flex-col items-center gap-6 py-6 md:hidden">
				{dataJson.map((item, index) => (
					<SlideshowCard
						key={index}
						name={item.name}
						artist={item.artist}
						images={item.images}
						height={sizes[index].height}
					/>
				))}
			</div>
		</div>
	);
}

Home.propTypes = {
	dataJson: PropTypes.array.isRequired,
};

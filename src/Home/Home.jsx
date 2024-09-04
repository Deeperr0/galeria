import PropTypes from "prop-types";

export default function Home({ dataJson }) {
	return (
		<div>
			<div className="hidden lg:grid grid-cols-4 gap-10 my-6 md:mx-10">
				{dataJson
					.reduce((columns, item, index) => {
						const columnIndex = index % 4;
						if (!columns[columnIndex]) columns[columnIndex] = [];
						columns[columnIndex].push(item);
						return columns;
					}, [])
					.map((columnItems, colIndex) => (
						<div
							key={colIndex}
							className="grid gap-10"
						>
							{columnItems.map((item) => (
								<div
									key={item.name}
									className="relative min-h-64"
								>
									<img
										src={item.images.gallery}
										alt={item.name}
										className="w-full h-full object-cover shadow"
										style={{ aspectRatio: item.aspectRatio || "auto" }}
									/>
									<div className="absolute text-white bottom-0 py-8 px-8 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)] w-full">
										<h1 className="font-libre font-bold text-2xl">
											{item.name}
										</h1>
										<p className="font-libre text-[13px] font-normal leading-4 opacity-75 mt-[6px]">
											{item.artist.name}
										</p>
									</div>
								</div>
							))}
						</div>
					))}
			</div>
			<div className="hidden lg:hidden md:grid grid-cols-2 gap-10 my-6 md:mx-10">
				{dataJson
					.reduce((columns, item, index) => {
						const columnIndex = index % 2;
						if (!columns[columnIndex]) columns[columnIndex] = [];
						columns[columnIndex].push(item);
						return columns;
					}, [])
					.map((columnItems, colIndex) => (
						<div
							key={colIndex}
							className="grid gap-10"
						>
							{columnItems.map((item) => (
								<div
									key={item.name}
									className="relative min-h-64"
								>
									<img
										src={item.images.gallery}
										alt={item.name}
										className="w-full h-full object-cover shadow"
										style={{ aspectRatio: item.aspectRatio || "auto" }}
									/>
									<div className="absolute text-white bottom-0 py-8 px-8 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)] w-full">
										<h1 className="font-libre font-bold text-2xl">
											{item.name}
										</h1>
										<p className="font-libre text-[13px] font-normal leading-4 opacity-75 mt-[6px]">
											{item.artist.name}
										</p>
									</div>
								</div>
							))}
						</div>
					))}
			</div>
			<div className="md:hidden flex flex-col items-center justify-center gap-6 my-6">
				{dataJson.map((item, index) => (
					<div
						key={item.name}
						className="w-11/12 bg-no-repeat bg-contain bg-left-top relative inline-block md:h-auto md:w-full md:rounded-lg"
						style={{ order: index }}
					>
						<img
							src={item.images.gallery}
							className=""
						/>
						<div className="absolute text-white bottom-0 py-8 px-8 bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)100%)] w-full">
							<h1 className="font-libre font-bold text-2xl">{item.name}</h1>
							<p className="font-libre text-[13px] font-normal leading-4 opacity-75 mt-[6px]">
								{item.artist.name}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

Home.propTypes = {
	dataJson: PropTypes.array.isRequired,
};

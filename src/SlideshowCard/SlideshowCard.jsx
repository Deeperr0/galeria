import { useState } from "react";
import PropTypes from "prop-types";
export default function SlideshowCard({
	index,
	name,
	description,
	artist,
	images,
	year,
	source,
	setCurrentIndex,
}) {
	const [togglePicture, setTogglePicture] = useState(false);
	function getWidth() {
		return ((index + 1) / 15) * 100;
	}
	function getPrevIndex() {
		if (index == 0) {
			return 0;
		} else {
			return index - 1;
		}
	}
	function getNextIndex() {
		if (index == 14) {
			return 14;
		} else {
			return index + 1;
		}
	}
	function toggleScroll() {
		if (document.querySelector("body").classList.contains("overflow-hidden")) {
			document.querySelector("body").classList.remove("overflow-hidden");
		} else {
			document.querySelector("body").classList.add("overflow-hidden");
		}
	}
	return (
		<div>
			{togglePicture && (
				<div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-85 z-30">
					<div className="h-screen w-screen flex flex-col items-center justify-center gap-8 px-6 md:px-32 lg:px-64 xl:px-[35%]">
						<div className="flex justify-end w-full">
							<button
								onClick={() => {
									setTogglePicture(false);
									toggleScroll();
								}}
								className="text-white font-libre text-sm leading-tight font-bold tracking-[3px] uppercase hover:opacity-25"
							>
								CLOSE
							</button>
						</div>
						<img
							src={images.gallery}
							alt={name}
							className="w-full object-contain"
						/>
					</div>
				</div>
			)}
			<div className="lg:flex lg:flex-row">
				<div className="relative flex flex-col md:flex-row">
					<div className="relative mx-6 mt-6 md:ml-10 md:mr-0">
						<div className="relative w-full md:w-[475px] md:h-[560px]">
							<img
								src={images.gallery}
								alt={name}
								className="w-full h-full object-cover object-center"
							/>
							<div
								className="absolute top-4 left-4 flex gap-4 items-center bg-black bg-opacity-75 px-4 py-4 md:bottom-4 md:top-auto hover:cursor-pointer hover:bg-white hover:bg-opacity-25"
								onClick={() => {
									setTogglePicture(true);
									toggleScroll();
								}}
							>
								<svg
									width="12"
									height="12"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g
										fill="#FFF"
										fillRule="nonzero"
									>
										<path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
									</g>
								</svg>
								<button className="uppercase text-white tracking-[2.14px] leading-[12px] text-[10px] font-bold font-libre border-0">
									view image
								</button>
							</div>
						</div>
					</div>
					<div className="w-auto">
						<div className="relative p-12 -mt-16 md:mt-0 z-10 bg-white w-[75%] md:-ml-56 flex flex-col gap-2 md:gap-6 md:pt-10 md:pl-[65px] md:w-[445px]">
							<h1 className="font-libre font-bold text-2xl leading-tight md:text-[56px] md:leading-[64px]">
								{name}
							</h1>
							<p className="font-libre text-darkGray text-[15px] leading-tight">
								{artist.name}
							</p>
						</div>
						<img
							src={artist.image}
							alt={name}
							className="ml-10 aspect-square w-16 h-16 md:w-32 md:h-32 md:ml-[30px] lg:absolute lg:top-[496px]"
						/>
					</div>
				</div>

				<div>
					<div className="relative -mt-5 pt-[74px] mx-6 md:ml-10 md:mt-16 md:pl-28 md:mr-[156px]">
						<p className="font-libre text-darkGray text-sm leading-loose font-bold">
							{description}
						</p>
						<p className="absolute top-0 right-0 font-libre text-[100px] text-veryLightGray leading-none font-bold -z-10 md:left-0  md:text-[200px] md:leading-[150px]">
							{year}
						</p>
					</div>
					<div className="my-28 lg:mb-0">
						<a
							href={source}
							className="uppercase font-libre text-[9px] font-bold tracking-[1.93px] leading-[11px] text-darkGray px-6 md:pl-[155px] underline hover:cursor-pointer hover:text-black"
						>
							Go to source
						</a>
					</div>
				</div>
			</div>
			<div className="relative bottom-0 left-0 right-0 lg:mt-28">
				<div className="flex justify-between">
					<div
						className="bg-darkGray h-[1px] transition-all duration-500 ease-out"
						style={{ width: `${getWidth()}%` }}
					></div>
					<div
						className="w-full bg-lightGray h-[1px] transition-all duration-500 ease-out"
						style={{ width: `${100 - getWidth()}%` }}
					></div>
				</div>
				<div className="px-6 py-4 md:py-6 md:px-10 flex justify-between">
					<div className="flex flex-col gap-2">
						<p className="font-libre text-sm leading-[17px] font-bold md:text-lg md:leading-[22px]">
							{name}
						</p>
						<p className="font-libre text-[10px] leading-[12px] md:text-[13px] md:leading-[16px]">
							{artist.name}
						</p>
					</div>
					<div className="flex gap-6 items-center">
						<svg
							width="26"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => {
								setCurrentIndex(getPrevIndex());
							}}
							className={
								index == 0
									? "opacity-15 cursor-not-allowed"
									: "opacity-100 cursor-pointer hover:opacity-50"
							}
						>
							<g
								stroke="#000"
								fill="none"
								fillRule="evenodd"
							>
								<path
									d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
									strokeWidth="2"
								/>
								<path
									fill="#D8D8D8"
									d="M.986.5h-1v22.775h1z"
								/>
							</g>
						</svg>
						<svg
							width="26"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => {
								setCurrentIndex(getNextIndex());
							}}
							className={
								index == 14
									? "opacity-15 cursor-not-allowed"
									: "opacity-100 cursor-pointer hover:opacity-50"
							}
						>
							<g
								stroke="#000"
								fill="none"
								fillRule="evenodd"
							>
								<path
									d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
									strokeWidth="2"
								/>
								<path
									fill="#D8D8D8"
									d="M24.708.5h1v22.775h-1z"
								/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

SlideshowCard.propTypes = {
	index: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	artist: PropTypes.object.isRequired,
	description: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	source: PropTypes.string.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
	images: PropTypes.object.isRequired,
};

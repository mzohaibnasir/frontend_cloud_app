import React from "react";
import {
	CloudUploadIcon,
	DatabaseIcon,
	PaperAirplaneIcon,
	ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";
function Hero() {
	return (
		<div
			name="home"
			className="w-full h-[700px] bg-zinc-200 flex flex-col justify-between"
		>
			<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
				<div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
					<p className="text-2xl">Unique Sequencing & Production</p>
					<h1 className="py-3 font-bold md:text-7xl text-5xl ">
						Cloud Management
					</h1>
					<p className="text-2xl">This is our tech brand.</p>
					<button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
				</div>
				<div>
					<img className="w-full m-4" src={bgImg} alt="/" />

					<div className="absolute flex flex-col py-8  md:min-w-[760px]  mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl  -bottom-20 ">
						{/* bottom~[5%] */}
						<p>Data Services</p>
						<div className="flex justify-between flex-wrap px-4 h-10">
							<p className="flex px-4 py-2 text-slate-500">
								<CloudUploadIcon className="h-6 text-indigo-600" /> App Security
							</p>
							<p className="flex px-4 py-2 text-slate-500">
								<DatabaseIcon className="h-6 text-indigo-600" /> Dashboard
								Design
							</p>
							<p className="flex px-4 py-2 text-slate-500">
								<ServerIcon className="h-6 text-indigo-600" /> Cloud Data
							</p>
							<p className="flex px-4 py-2 text-slate-500">
								<PaperAirplaneIcon className="h-6 text-indigo-600" /> API
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

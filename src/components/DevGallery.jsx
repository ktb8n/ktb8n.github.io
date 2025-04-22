import React, { useState } from "react";
import ArtCard from "./ArtCard";
import DevDetailModal from "./DevDetailModal";
import movingEyesImage from "../assets/dev/SofonisbaAnguissola.png";
import mitBusImage from "../assets/dev/realTimeBus.png";
import errorToITImage from "../assets/dev/errorToIT1.png";
import shippingFormImage from "../assets/dev/shippingForm1.png";
import outlookerImage from "../assets/dev/outlookerImagePrivate.png";
import productivityTimerImage from "../assets/dev/ProductivityTimerImage.png";
export default function DevGallery() {
	const [activeProject, setActiveProject] = useState(null);

	const devProjects = [
		{
			id: "dev1",
			title: "Moving Eyes",
			image: movingEyesImage,
			description: "SAMPLE INFORMATION",
			githubURL: "",
			tooltip: "scooby doo style css tricks",
		},
		{
			id: "dev2",
			title: "Productivity Timer",
			image: productivityTimerImage,
			description: "Time management tool used first in classroom settings and later on tuned to scrum meetings",
			githubURL: "",
			tooltip: "time management tool",
		},
		{
			id: "dev3",
			title: "MIT Bus Routes",
			image: mitBusImage,
			description:
				"This project made use of mapbox-gl api and public data from MIT to track busses between the Harvard and MIT campuses. Using a starter code outline I hard coded coordinate updates. I extended the code to update the busses' positions in real-time.",
			githubURL: "",
			tooltip: "mapbox-gl api and public data from MIT to track busses",
		},
		{
			id: "dev4",
			title: "Error to IT",
			image: errorToITImage,
			description: "",
			githubURL: "",
			tooltip: "ASP.NET winform application",
		},
		{
			id: "dev5",
			title: "Shipping Form",
			image: shippingFormImage,
			description: "Blazor WebAssembly application",
			githubURL: "",
			tooltip: "Blazor WebAssembly application",
		},
		{
			id: "dev6",
			title: "OutLooker",
			image: outlookerImage,
			description: "Terminal application to manage Outlook email attachments",
			githubURL: "",
			tooltip: "Terminal application to manage Outlook email attachments",
		},
	];

	const handleCardClick = (proj) => {
		setActiveProject(proj.id === activeProject?.id ? null : proj);
	};

	return (
		<div>
			<h2>Engineering Projects</h2>
			<div className='gallery-flex'>
				{devProjects.map((proj) => (
					<ArtCard
						key={proj.id}
						artwork={proj}
						onClick={() => handleCardClick(proj)}
					/>
				))}
			</div>

			{activeProject && (
				<DevDetailModal
					project={activeProject}
					onClose={() => setActiveProject(null)}
				/>
			)}
		</div>
	);
}

import React, { useState } from "react";
import DevCard from "./DevCard.jsx";
import DevDetailModal from "./DevDetailModal";
import movingEyesImage from "../assets/dev/SofonisbaAnguissola.png";
import mitBusImage from "../assets/dev/RealTimeBus.png";
import errorToITImage from "../assets/dev/ErrorToIT1.png";
import shippingFormImage from "../assets/dev/ShippingForm1.png";
import outlookerImage from "../assets/dev/OutlookerImagePrivate.png";
import productivityTimerImage from "../assets/dev/ProductivityTimerImage.png";
export default function DevGallery() {
	const [activeProject, setActiveProject] = useState(null);

	const devProjects = [
		{
			id: "dev1",
			title: "Moving Eyes",
			image: movingEyesImage,
			description: "This project was created to demonstrate the use of CSS and JavaScript to create a moving eyes effect. The eyes follow the mouse cursor, creating an interactive experience. It is in the process of being reformatted as a react component",
			githubURL: "",
			tooltip: "scooby doo style css tricks",
		},
		{
			id: "dev2",
			title: "Productivity Timer",
			image: productivityTimerImage,
			description: "Timer application to help manage time. It is a work in progress and is being developed as a react component. The timer is designed to help users stay focused and manage their time effectively.",
			githubURL: "",
			tooltip: "time management tool",
		},
		{
			id: "dev3",
			title: "MIT Bus Routes",
			image: mitBusImage,
			description:
				"This project was created to demonstrate the use of mapbox-gl api and public data from MIT to track busses between the Harvard and MIT campuses. Using a starter code outline I hard coded coordinate updates. I extended the code to update the busses' positions in real-time.",
			githubURL: "",
			tooltip: "mapbox-gl api and public data from MIT to track busses",
		},
		{
			id: "dev4",
			title: "Error to IT",
			image: errorToITImage,
			description: "",
			githubURL: "",
			tooltip: "ASP.NET winform application made to alleviate the number of tickets coming with insufficient information to troubleshoot them.",
		},
		{
			id: "dev5",
			title: "Shipping Form",
			image: shippingFormImage,
			description: "Blazor WebAssembly application",
			githubURL: "",
			tooltip: "Blazor WebAssembly application developed to help manage and standardize shipping information.",
		},
		{
			id: "dev6",
			title: "OutLooker",
			image: outlookerImage,
			description: "Terminal application to manage Outlook email attachments",
			githubURL: "",
			tooltip: "Terminal application that automates the process of downloading and organizing email attachments from Outlook. It saves all pdf attachments as an OCR pdf, names it according to our naming convention and saves it in the correct place for accounting.",
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
					<DevCard
						key={proj.id}
						artwork={proj}
						onClick={() => handleCardClick(proj)}
						tooltip={proj.tooltip}
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

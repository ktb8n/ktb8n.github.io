import React, { useState } from "react";
import DevCard from "./DevCard";
import DevDetailModal from "./DevDetailModal";
import Filter from "./Filter"; // Reuse the same Filter component!
import movingEyesImage from "../assets/dev/SofonisbaAnguissola.png";
import mitBusImage from "../assets/dev/RealTimeBus.png";
import errorToITImage from "../assets/dev/ErrorToIT1.png";
import shippingFormImage from "../assets/dev/ShippingForm1.png";
import outlookerImage from "../assets/dev/OutlookerImagePrivate.png";
import productivityTimerImage from "../assets/dev/ProductivityTimerImage.png";

export default function DevGallery() {
	const [activeProject, setActiveProject] = useState(null);
	const [selectedSkills, setSelectedSkills] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [isFilterExpanded, setIsFilterExpanded] = useState(true);

	const devProjects = [
		{
			id: "dev1",
			title: "Moving Eyes",
			image: movingEyesImage,
			skills: ["CSS", "JavaScript"],
			year: 2023,
			description: "Eyes follow the mouse cursor using CSS and JS.",
			tooltip: "scooby doo style css tricks",
		},
		{
			id: "dev2",
			title: "Productivity Timer",
			image: productivityTimerImage,
			skills: ["React", "Hooks"],
			year: 2024,
			description: "React timer to manage focused work sessions.",
			tooltip: "time management tool",
		},
		{
			id: "dev3",
			title: "MIT Bus Routes",
			image: mitBusImage,
			skills: ["JavaScript", "Mapbox"],
			year: 2023,
			description: "Real-time MIT bus tracking using Mapbox.",
			tooltip: "mapbox-gl api and public data from MIT to track busses",
		},
		{
			id: "dev4",
			title: "Error to IT",
			image: errorToITImage,
			skills: ["ASP.NET", "WinForms", "C#"],
			year: 2022,
			description: "WinForms tool for structured IT ticketing.",
			tooltip: "ASP.NET WinForms application",
		},
		{
			id: "dev5",
			title: "Shipping Form",
			image: shippingFormImage,
			skills: ["Blazor", ".NET", "C#", "WebAssembly"],
			year: 2023,
			description: "Blazor app to streamline shipping data.",
			tooltip: "Blazor WebAssembly form app",
		},
		{
			id: "dev6",
			title: "OutLooker",
			image: outlookerImage,
			skills: ["C#", "Outlook", "Automation"],
			year: 2024,
			description: "Terminal app for organizing Outlook attachments.",
			tooltip: "Automates download + naming of Outlook PDFs",
		},
	];

	const allSkills = Array.from(
		new Set(devProjects.flatMap((p) => p.skills))
	).sort();
	const allYears = Array.from(new Set(devProjects.map((p) => p.year))).sort(
		(a, b) => b - a
	);

	const toggleSkill = (skill) => {
		setSelectedSkills((prev) =>
			prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
		);
	};

	const toggleYear = (year) => {
		setSelectedYears((prev) =>
			prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
		);
	};

	const filteredProjects = devProjects.filter((proj) => {
		const skillMatch =
			selectedSkills.length === 0 ||
			selectedSkills.some((s) => proj.skills.includes(s));
		const yearMatch =
			selectedYears.length === 0 || selectedYears.includes(proj.year);
		return skillMatch && yearMatch;
	});

	return (
		<div
			style={{
				backgroundColor: "#1a1a1a",
				color: "#fff",
				minHeight: "100vh",
				padding: "1rem",
			}}
		>
			<button
				onClick={() => setIsFilterExpanded(!isFilterExpanded)}
				style={{
					marginBottom: "1rem",
					padding: "0.25rem 0.5rem",
					backgroundColor: "#000000",
					color: "#fff",
					border: "none",
					cursor: "pointer",
				}}
			>
				{isFilterExpanded ? "Hide Filter" : "Show Filter"}
			</button>

			<div className='gallery-layout'>
				<div
					className={`filter-column ${
						isFilterExpanded ? "slide-in" : "slide-out"
					}`}
				>
					<Filter
						allMediums={allSkills} // just reuse the prop names!
						allYears={allYears}
						selectedMediums={selectedSkills}
						selectedYears={selectedYears}
						toggleMedium={toggleSkill}
						toggleYear={toggleYear}
					/>
				</div>

				<div className='gallery-grid'>
					{filteredProjects.map((proj) => (
						<DevCard
							key={proj.id}
							project={proj}
							onClick={() => setActiveProject(proj)}
							tooltip={proj.tooltip}
						/>
					))}
				</div>
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

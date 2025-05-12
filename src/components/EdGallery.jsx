// EdGallery.js
import React, { useState } from "react";
import Filter from "./Filter";
import EdCard from "./EdCard"; 
import EdDetailModal from "./EdDetailModal";



export default function EdGallery({ edworks }) {
	const [selectedMediums, setSelectedMediums] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedEd, setSelectedEd] = useState(null);
	const [isFilterExpanded, setIsFilterExpanded] = useState(false);

    if (!Array.isArray(edworks)) {
		return <div style={{ color: "#fff" }}>Loading gallery...</div>;
	}

	const allMediums = Array.from(new Set(edworks.map((a) => a.medium)));
	const allYears = Array.from(new Set(edworks.map((a) => a.year))).sort(
		(a, b) => b - a
	);

	const toggleMedium = (medium) => {
		setSelectedMediums((prev) =>
			prev.includes(medium)
				? prev.filter((m) => m !== medium)
				: [...prev, medium]
		);
	};

	const toggleYear = (year) => {
		setSelectedYears((prev) =>
			prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
		);
	};

	const filteredEdworks = edworks.filter((ed) => {
		const mediumMatch =
			selectedMediums.length === 0 || selectedMediums.includes(ed.medium);
		const yearMatch =
			selectedYears.length === 0 || selectedYears.includes(ed.year);
		return mediumMatch && yearMatch;
	});

	return (
		<div
			style={{
				backgroundColor: "black",
				minHeight: "100vh",
				padding: "1rem",
			}}
		>
			<div style={{ marginBottom: "0.5rem", color: "#ccc" }}>
				<button
					className='toggle-filter-button'
					onClick={() => setIsFilterExpanded(!isFilterExpanded)}
				>
					{isFilterExpanded ? "Hide Filter" : "Show Filter"}
				</button>
			</div>

			<div className='gallery-layout'>
				<div
					className={`filter-column ${
						isFilterExpanded ? "slide-in" : "slide-out"
					}`}
				>
					<Filter
						allMediums={allMediums}
						allYears={allYears}
						selectedMediums={selectedMediums}
						selectedYears={selectedYears}
						toggleMedium={toggleMedium}
						toggleYear={toggleYear}
					/>
				</div>

				<div className='gallery-grid'>
					{[...filteredEdworks]
						.map((item, index) => ({ ...item, originalIndex: index })) // track original order
						.sort((a, b) => {
							const yearA = parseInt(a.year) || 0;
							const yearB = parseInt(b.year) || 0;

							if (yearA !== yearB) {
								return yearB - yearA; // year descending
							}
							return b.originalIndex - a.originalIndex; // reverse order within same year
						})
						.map((ed) => (
							<EdCard
								key={ed.id}
								edwork={ed}
								onClick={() => setSelectedEd(ed)}
							/>
						))}
				</div>
			</div>

			{selectedEd && (
				<EdDetailModal
					edwork={selectedEd}
					onClose={() => setSelectedEd(null)}
				/>
			)}
		</div>
	);
}

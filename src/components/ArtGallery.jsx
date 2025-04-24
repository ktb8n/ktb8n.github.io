// ArtGallery.js
import React, { useState } from "react";
import Filter from "./Filter";
import ArtCard from "./ArtCard";
import ArtDetailModal from "./ArtDetailModal";

export default function ArtGallery({ artworks }) {
	const [selectedMediums, setSelectedMediums] = useState([]);
	const [selectedYears, setSelectedYears] = useState([]);
	const [selectedArt, setSelectedArt] = useState(null);
	const [isFilterExpanded, setIsFilterExpanded] = useState(true);
	

	if (!Array.isArray(artworks)) {
		return <div style={{ color: "#fff" }}>Loading gallery...</div>;
	}

	const allMediums = Array.from(new Set(artworks.map((a) => a.medium)));
	const allYears = Array.from(new Set(artworks.map((a) => a.year))).sort(
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

	const filteredArtworks = artworks.filter((art) => {
		const mediumMatch =
			selectedMediums.length === 0 || selectedMediums.includes(art.medium);
		const yearMatch =
			selectedYears.length === 0 || selectedYears.includes(art.year);
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
					onClick={() => setIsFilterExpanded(!isFilterExpanded)}
					style={{
						padding: "0.25rem 0.5rem",

						color: "#fff",
						border: "none",
						cursor: "pointer",
					}}
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
					{[...filteredArtworks]
						.sort((a, b) => parseInt(b.year) - parseInt(a.year))
						.map((art) => (
							<ArtCard
								key={art.id}
								artwork={art}
								onClick={() => setSelectedArt(art)}
							/>
						))}
				</div>
			</div>

			{selectedArt && (
				<ArtDetailModal
					artwork={selectedArt}
					onClose={() => setSelectedArt(null)}
				/>
			)}
		</div>
	);

}

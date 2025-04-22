// Filter.js
import React from "react";

export default function Filter({
	allMediums,
	allYears,
	selectedMediums,
	selectedYears,
	toggleMedium,
	toggleYear,
}) {
	return (
		<div
			style={{
				borderTop: "1px solid #666",
				borderBottom: "1px solid #666",
				padding: "1rem 0",
				marginBottom: "1rem",
			}}
		>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					{allMediums.map((medium) => (
						<button
							key={medium}
							onClick={() => toggleMedium(medium)}
							style={{
								marginRight: "0.5rem",
								padding: "0.25rem 0.5rem",
								border: "1px solid white",
								borderRadius: "4px",
								backgroundColor: selectedMediums.includes(medium)
									? "white"
									: "#3a3a3a",
								color: selectedMediums.includes(medium) ? "#000" : "#fff",
								cursor: "pointer",
							}}
						>
							{medium}
						</button>
					))}
				</div>
				<div>
					{allYears.map((year) => (
						<button
							key={year}
							onClick={() => toggleYear(year)}
							style={{
								marginLeft: "0.5rem",
								padding: "0.25rem 0.5rem",
								border: "1px solid white",
								borderRadius: "4px",
								backgroundColor: selectedYears.includes(year)
									? "white"
									: "#3a3a3a",
								color: selectedYears.includes(year) ? "#000" : "#fff",
								cursor: "pointer",
							}}
						>
							{year}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

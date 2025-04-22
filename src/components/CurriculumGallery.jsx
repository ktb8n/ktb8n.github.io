import React from "react";

export default function CurriculumGallery() {
	return (
		<div
			style={{
				padding: "2rem",
				backgroundcolor: 333,
				color: "#fff",
				height: "100%", // Ensure no scrolling occurs
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			<div style={{ fontSize: "2rem", color: "#333", fontWeight: "bold" }}>
				<h1>Coming Soon</h1>
				<p>Check back later for updates on this section!</p>
			</div>
		</div>
	);
}

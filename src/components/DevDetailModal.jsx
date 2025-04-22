//import React, { useState } from "react";
import MovingEyes from "./movingEyes/MovingEyes";
import portrait from "../assets/dev/SofonisbaAnguissola.png";
import ProductivityTimer from "./productivityTimer/ProductivityTimer";

export default function DevDetailModal({ project, onClose }) {
	const handleBackdropClick = (e) => {
		if (e.target.classList.contains("modal")) {
			onClose();
		}
	};

	//const [hovered, setHovered] = useState(false);

	return (
		<div
			className='modal'
			onClick={handleBackdropClick}
			style={{
				position: "fixed",
				inset: 0,
				backgroundColor: "rgba(20, 20, 20, 0.95)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				zIndex: 1000,
			}}
		>
			<div
				className='modal-content modal-bordered'
				style={{
					backgroundColor: "#2a2a2a",
					border: "2px solid #a1a1a1",
					borderRadius: "8px",
					padding: "1rem",
					maxHeight: "80vh",
					overflowY: "auto",
					width: "90%",
					maxWidth: "600px",
					textAlign: "center",
					color: "#eee",
					position: "relative",
				}}
			>
				<button
					className='close-button'
					onClick={onClose}
					style={{
						background: "none",
						border: "none",
						fontSize: "1.25rem",
						color: "#ccc",
						position: "absolute",
						top: "1rem",
						right: "1rem",
						cursor: "pointer",
						zIndex: 10,
					}}
					aria-label='Close'
				>
					×
				</button>

				{/* Component or Image */}
				<div
					style={{
						position: "relative",
						marginBottom: "1rem",
					}}
				>
					{project.id === "dev1" ? (
						<MovingEyes portrait={portrait} />
					) : project.id === "dev2" ? (
						<ProductivityTimer />
					) : (
						<img
							src={project.image}
							alt={project.title}
							style={{
								width: "100%",
								maxHeight: "50vh",
								objectFit: "contain",
							}}
						/>
					)}
				</div>

				<h2 style={{ margin: "0.5rem 0" }}>{project.title}</h2>
				{project.stack && (
					<p className='meta' style={{ color: "#aaa" }}>
						{project.stack.join(" • ")}
					</p>
				)}
				<p style={{ color: "#aaa" }}>{project.description}</p>

				{project.github && (
					<a
						href={project.github}
						target='_blank'
						rel='noopener noreferrer'
						style={{
							display: "inline-block",
							marginTop: "1rem",
							color: "#4ecdc4",
							textDecoration: "underline",
							fontWeight: "bold",
						}}
					>
						View on GitHub →
					</a>
				)}
			</div>
		</div>
	);
}

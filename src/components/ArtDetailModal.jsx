import React, { useState } from "react";

export default function ArtDetailModal({ artwork, onClose }) {
	const handleBackdropClick = (e) => {
		if (e.target.classList.contains("modal")) {
			onClose();
		}
	};

	const [hovered, setHovered] = useState(false);

	const handleEmailClick = () => {
		const subject = encodeURIComponent(`Print Order Request: ${artwork.title}`);
		const body = encodeURIComponent(
			`Hello Katherine,\n\nI'd like to order a print of:\n\nTitle: ${
				artwork.title
			}\nYear: ${artwork.year}\nMedium: ${
				artwork.medium
			}\nDate/Time: ${new Date().toLocaleString()}\n\nThanks!`
		);
		window.location.href = `mailto:katherinebaeten@gmail.com?subject=${subject}&body=${body}`;
	};

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

				<div
					style={{
						position: "relative",
						marginBottom: "1rem",
						cursor: "pointer",
					}}
					onClick={(e) => {
						// Prevent email click if the click originated from the close button
						if (e.target.closest(".close-button")) return;
						handleEmailClick();
					}}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<img
						src={artwork.image}
						alt={artwork.title}
						style={{
							width: "100%",
							maxHeight: "50vh",
							objectFit: "contain",
							opacity: hovered ? 0.5 : 1,
							transition: "opacity 0.3s ease",
						}}
					/>
					{hovered && (
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "white",
								fontSize: "1.5rem",
								fontWeight: "bold",
								pointerEvents: "none",
							}}
						>
							Order Prints
						</div>
					)}
				</div>

				<h2 style={{ margin: "0.5rem 0" }}>{artwork.title}</h2>
				<p className='meta' style={{ color: "#aaa" }}>
					{artwork.year} • {artwork.medium}
				</p>
				<p style={{ color: "#aaa" }}>{artwork.description}</p>
				<div className='tags' style={{ marginTop: "0.5rem" }}>
					{artwork.tags.map((tag) => (
						<span
							key={tag}
							className='tag'
							style={{ color: "#aaa", marginRight: "0.25rem" }}
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

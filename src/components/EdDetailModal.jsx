import React from "react";

export default function EdDetailModal({ edwork, onClose }) {
	const handleBackdropClick = (e) => {
		if (e.target.classList.contains("modal")) {
			onClose();
		}
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
					padding: "2rem",
					maxHeight: "90vh",
					overflowY: "auto",
					width: "95%",
					maxWidth: "900px",
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
						fontSize: "1.5rem",
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

				<div style={{ marginBottom: "1rem" }}>
					<img
						src={edwork.image}
						alt={edwork.title}
						style={{
							width: "100%",
							maxHeight: "60vh",
							objectFit: "contain",
							borderRadius: "4px",
						}}
					/>
				</div>

				<h2 style={{ margin: "0.5rem 0" }}>&ldquo;{edwork.title}&rdquo;</h2>

				<p style={{ color: "#aaa", textAlign: "left", lineHeight: 1.5 }}>
					{edwork.description}
				</p>


			</div>
		</div>
	);
}

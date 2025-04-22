import React, { useState, useEffect, useRef } from "react";
import frameOverlay from "../assets/art/HollowFrame.png";

export default function ArtCard({ artwork, onClick }) {
	const [isWide, setIsWide] = useState(false);
	const imgRef = useRef(null);

	useEffect(() => {
		const img = imgRef.current;
		if (img && img.complete) {
			checkAspectRatio();
		} else if (img) {
			img.onload = checkAspectRatio;
		}
	}, []);

	const checkAspectRatio = () => {
		const img = imgRef.current;
		if (img) {
			const ratio = img.naturalWidth / img.naturalHeight;
			setIsWide(ratio >= 0.95); // shrink for square-ish and wider images
		}
	};

	return (
		<div
			className='art-card'
			onClick={() => onClick(artwork)}
			style={{
				position: "relative",
				aspectRatio: "4 / 3",
				width: "100%",
				maxWidth: "220px",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					ref={imgRef}
					src={artwork.image}
					alt={artwork.title}
					className='thumbnail'
					style={{
						maxWidth: isWide ? "75%" : "90%",
						maxHeight: isWide ? "75%" : "90%",
						objectFit: "contain",
						zIndex: 1,
						display: "block",
					}}
				/>
			</div>
			<img
				src={frameOverlay}
				alt='Frame Overlay'
				className='frame-overlay'
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					transform: isWide ? "rotate(90deg)" : "none",
					transformOrigin: "center",
					pointerEvents: "none",
					zIndex: 2,
				}}
			/>
		</div>
	);
}

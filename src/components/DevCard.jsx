import React from "react";
import overlay from "../assets/dev/IBMFrame.png";
import "./DevCard.css";

export default function DevCard({ project, onClick, tooltip }) {
	if (!project) {
		console.error("❌ DevCard received undefined 'project' prop");
		return null;
	}

	return (
		<div className='dev-card' onClick={() => onClick(project)}>
			<div className='tooltip'>{tooltip}</div>

			<div className='image-container'>
				<img src={project.image} alt={project.title} className='thumbnail' />
				<img src={overlay} alt='Frame Overlay' className='frame-overlay' />
			</div>
		</div>
	);
}

// EdCard.js
import React from "react";
import ChalkboardFrame from "../assets/ed/ChalkboardFrame.png";
import "./EdCard.css";


export default function EdCard({ edwork, onClick }) {
	return (
		<div className='card-container' onClick={onClick}>
			<img src={ChalkboardFrame} alt='Frame' className='overlay-frame' />
			<img src={edwork.image} alt={edwork.title} className='card-image' />
			<div className='card-label'>
				<h4>{edwork.title}</h4>
				<p>{edwork.year}</p>
			</div>
		</div>
	);
}

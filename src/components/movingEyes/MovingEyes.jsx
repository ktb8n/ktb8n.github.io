// MovingEyes.jsx
import React, { useEffect } from "react";
import "./MovingEyes.css";


const MovingEyes = ({ portrait }) => {
	useEffect(() => {
		const balls = document.querySelectorAll(".ball");

		const handleMouseMove = (event) => {
			const x = (event.clientX * 100) / window.innerWidth + "%";
			const y = (event.clientY * 100) / window.innerHeight + "%";

			balls.forEach((ball) => {
				ball.style.left = x;
				ball.style.top = y;
				ball.style.transform = `translate(-${x}, -${y})`;
			});
		};

		document.addEventListener("mousemove", handleMouseMove);
		return () => document.removeEventListener("mousemove", handleMouseMove);
	}, []);

return (
	<div className="moving-eyes-component">
	<div className='moving-eyes-container '>
		<div
			className='moving-eyes-bg'
			style={{ backgroundImage: `url(${portrait})` }}
		/>

		<div className='moving-eyes-eyes'>
			<div className='eye'>
				<div className='ball'></div>
			</div>
			<div className='eye right'>
				<div className='ball'></div>
			</div>
		</div>
	</div>
	</div>
);

};

export default MovingEyes;

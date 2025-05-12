// components/EdGallery.jsx
import React from "react";

function EdGallery({ items }) {
	return (
		<div className='gallery'>
			{items.map((item) => (
				<div key={item.id} className='gallery-item'>
					<img src={item.image} alt={item.title} />
					<h3>{item.title}</h3>
					<p>{item.year}</p>
					<p>{item.medium}</p>
					<p>{item.description}</p>
					<ul>
						{item.tags.map((tag, index) => (
							<li key={index}>{tag}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default EdGallery;

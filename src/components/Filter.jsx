// Filter.js
export default function Filter({
	allMediums,
	allYears,
	selectedMediums,
	selectedYears,
	toggleMedium,
	toggleYear,
}) {
	return (
		<div className='filter-container'>
			<div className='filter-section'>
				<h4>Skill</h4>
				<div className='filter-buttons'>
					{allMediums.map((medium) => (
						<button
							key={medium}
							className={selectedMediums.includes(medium) ? "selected" : ""}
							onClick={() => toggleMedium(medium)}
						>
							{medium}
						</button>
					))}
				</div>
			</div>

			<div className='filter-section'>
				<h4>Year</h4>
				<div className='filter-buttons'>
					{allYears.map((year) => (
						<button
							key={year}
							className={selectedYears.includes(year) ? "selected" : ""}
							onClick={() => toggleYear(year)}
						>
							{year}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

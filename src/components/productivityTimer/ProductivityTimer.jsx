import React, { useState, useEffect, useRef } from "react";
import "./ProductivityTimer.css";

const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");

const ProductivityTimer = () => {
	const [intervals, setIntervals] = useState(4);
	const [focusLength, setFocusLength] = useState(25);
	const [shortBreakLength, setShortBreakLength] = useState(5);
	const [prepLength, setPrepLength] = useState(5);
	const [wrapLength, setWrapLength] = useState(3);
	const [isRunning, setIsRunning] = useState(false);
	const [paused, setPaused] = useState(false); // New state to track pause/resume
	const [currentIndex, setCurrentIndex] = useState(0);
	const [timeLeft, setTimeLeft] = useState(0);
	const timerRef = useRef(null);
	const intervalPlan = useRef([]);

	const buildPlan = () => {
		const plan = [];
		plan.push({ label: "Prep", length: prepLength * 60 });
		for (let i = 0; i < intervals; i++) {
			plan.push({ label: "Focus", length: focusLength * 60 });
			if (i < intervals - 1) {
				plan.push({ label: "Break", length: shortBreakLength * 60 });
			}
		}
		plan.push({ label: "Wrap", length: wrapLength * 60 });
		return plan;
	};

	const startTimer = () => {
		const plan = buildPlan();
		intervalPlan.current = plan;
		setCurrentIndex(0);
		setTimeLeft(plan[0].length);
		setIsRunning(true);
		setPaused(false);
	};

	const stopTimer = () => {
		clearInterval(timerRef.current);
		setIsRunning(false);
		setPaused(false);
		setCurrentIndex(0);
		setTimeLeft(0);
	};

	const pauseTimer = () => {
		clearInterval(timerRef.current); // Clear the interval
		setPaused(true); // Set the paused state
	};

	const resumeTimer = () => {
		setPaused(false);
		timerRef.current = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					beep.play();
					const nextIndex = currentIndex + 1;
					if (nextIndex >= intervalPlan.current.length) {
						stopTimer();
						return 0;
					} else {
						setCurrentIndex(nextIndex);
						return intervalPlan.current[nextIndex].length;
					}
				}
				return prev - 1;
			});
		}, 1000);
	};

	useEffect(() => {
		if (isRunning && !paused) {
			timerRef.current = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						beep.play();
						const nextIndex = currentIndex + 1;
						if (nextIndex >= intervalPlan.current.length) {
							stopTimer();
							return 0;
						} else {
							setCurrentIndex(nextIndex);
							return intervalPlan.current[nextIndex].length;
						}
					}
					return prev - 1;
				});
			}, 1000);
		}
		return () => clearInterval(timerRef.current);
	}, [isRunning, currentIndex, paused]);

	const formatTime = (sec) => {
		const m = Math.floor(sec / 60)
			.toString()
			.padStart(2, "0");
		const s = (sec % 60).toString().padStart(2, "0");
		return `${m}:${s}`;
	};

	const getTimeStats = () => {
		const plan = intervalPlan.current;
		if (!plan.length) return { passed: 0, total: 0 };

		const total = plan.reduce((acc, p) => acc + p.length, 0);
		let passed = 0;
		for (let i = 0; i < currentIndex; i++) {
			passed += plan[i].length;
		}
		passed += plan[currentIndex]?.length - timeLeft;

		return {
			passed,
			total,
		};
	};

const renderVisual = () => {
	const plan = buildPlan(); // Only used for rendering
	const { passed, total } = getTimeStats();

	let accumulated = 0;

	return (
		<div className='visual-track'>
			{plan.map((p, idx) => {
				const width = (p.length / total) * 100; // Dynamically calculate width
				const isActive = idx === currentIndex;
				const offset = (accumulated / total) * 100; // Offset based on accumulated time
				accumulated += p.length;

				return (
					<div
						key={idx}
						className={`segment ${p.label.toLowerCase()} ${
							isActive ? "active" : ""
						}`}
						style={{
							width: `${width}%`, // Ensure width is proportional
							left: `${offset}%`, // Position each segment correctly
						}}
						title={p.label}
					/>
				);
			})}

			{isRunning && (
				<div
					className='progress-indicator'
					style={{
						left: `${(passed / total) * 100}%`,
					}}
				/>
			)}
		</div>
	);
};

	const currentPhase =
		intervalPlan.current[currentIndex]?.label?.toLowerCase() || "";
	const { passed, total } = getTimeStats();

	return (
		<div
			className={`productivity-timer ${
				isRunning ? "dimmed" : ""
			} phase-${currentPhase}`}
		>
			<div className='inputs'>
				<label>
					Prep:
					<input
						type='number'
						min='0'
						value={prepLength}
						onChange={(e) => setPrepLength(parseInt(e.target.value))}
					/>
				</label>
				<label>
					Intervals:
					<input
						type='number'
						min='1'
						value={intervals}
						onChange={(e) => setIntervals(parseInt(e.target.value))}
					/>
				</label>
				<label>
					Focus:
					<input
						type='number'
						min='1'
						value={focusLength}
						onChange={(e) => setFocusLength(parseInt(e.target.value))}
					/>
				</label>
				<label>
					Break:
					<input
						type='number'
						min='1'
						value={shortBreakLength}
						onChange={(e) => setShortBreakLength(parseInt(e.target.value))}
					/>
				</label>

				<label>
					Wrap-Up:
					<input
						type='number'
						min='0'
						value={wrapLength}
						onChange={(e) => setWrapLength(parseInt(e.target.value))}
					/>
				</label>
			</div>

			<div className='visual-container'>{renderVisual()}</div>
			<div className='time-stats'>
				{formatTime(passed)} / {formatTime(total)}
			</div>

<div className="time-display">
  <span className="phase-label">{intervalPlan.current[currentIndex]?.label || ""}</span>
  <span className={`time-remaining ${currentPhase}`}>{formatTime(timeLeft)}</span>
</div>


			<div className='controls'>
				{!isRunning && (
					<button onClick={startTimer} className='start-btn'>
						Start
					</button>
				)}
				{isRunning && !paused && (
					<button onClick={pauseTimer} className='start-btn'>
						Pause
					</button>
				)}
				{isRunning && paused && (
					<button onClick={resumeTimer} className='start-btn'>
						Resume
					</button>
				)}
				{isRunning && (
					<button onClick={stopTimer} className='stop-btn'>
						Stop
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductivityTimer;

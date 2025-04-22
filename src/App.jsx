// App.jsx
import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Navigate,
	useLocation,
	useNavigate,
} from "react-router-dom";

import ArtGallery from "./components/ArtGallery";
import ArtDetailModal from "./components/ArtDetailModal";
import DevGallery from "./components/DevGallery";
import CurriculumGallery from "./components/CurriculumGallery";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Art asset imports
import heronImage from "./assets/art/Ktb8n-Sample-Watercolor-Heron.JPG";
import cavePointImage from "./assets/art/KtB8n_OilPaint_CavePointTamaracks_2024.jpg";
import childsStillLife from "./assets/art/KtB8n_OilPaint_ChildsStillLife_2018.jpg";
import gilScot from "./assets/art/KtB8n_OilPaint_GilScot_2025.jpg";
import gilScotSr from "./assets/art/KtB8n_OilPaint_GilScotSr_2025.jpg";
import kittens from "./assets/art/KtB8n_OilPaint_Kittens_2025.jpg";
import matriachBaeten from "./assets/art/KtB8n_OilPaint_MatriachBaeten_2024.jpg";
import raleigh from "./assets/art/KtB8n_OilPaint_Raleigh_2025.jpg";
import sunny from "./assets/art/KtB8n_OilPaint_Sunny_2025.jpg";
import blueJay from "./assets/art/KtB8n_Watercolor_BlueJay_2024.jpg";
import chickadee from "./assets/art/KtB8n_Watercolor_Chickadee_2024.jpg";
import hips from "./assets/art/KtB8n_Fiber_Hips_2012.jpg";

// Misc asset imports
import portrait1 from "./assets/Portrait01.png";
import portrait2 from "./assets/Portrait02.png";
import resumePDF from "./assets/KatherineBaetenResume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faGithub,
	faLinkedin,
	faBluesky,
} from "@fortawesome/free-brands-svg-icons";

function AppContent() {
	const [artworks] = useLocalStorage("morrowroot-data", [
		// Full artwork objects
		{
			id: 1,
			title: "Watercolor Heron",
			year: "2023",
			medium: "Watercolor",
			tags: ["bird", "watercolor", "nature"],
			image: heronImage,
			description: "A graceful heron in watercolor.",
			forsale: true,
			available: true,
		},
		{
			id: 2,
			title: "Cave Point Tamaracks",
			year: "2024",
			medium: "Oil Paint",
			tags: ["landscape", "tamarack", "trees"],
			image: cavePointImage,
			description: "Golden tamaracks at Cave Point.",
			forsale: true,
			available: true,
		},
		{
			id: 3,
			title: "Child's Still Life",
			year: "2018",
			medium: "Oil Paint",
			tags: ["still life"],
			image: childsStillLife,
			description: "A child’s take on classic still life.",
			forsale: true,
			available: true,
		},
		{
			id: 4,
			title: "Gil Scot",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScot,
			description: "Portrait of Gil Scot.",
			forsale: true,
			available: true,
		},
		{
			id: 5,
			title: "Gil Scot Sr.",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScotSr,
			description: "Portrait of Gil Scot Senior.",
			forsale: true,
			available: true,
		},
		{
			id: 6,
			title: "Kittens",
			year: "2025",
			medium: "Oil Paint",
			tags: ["animals", "kittens"],
			image: kittens,
			description: "Curious kittens in oil.",
			forsale: false,
			available: false,
		},
		{
			id: 7,
			title: "Matriarch Baeten",
			year: "2024",
			medium: "Oil Paint",
			tags: ["portrait", "family"],
			image: matriachBaeten,
			description: "A strong matriarch in oil.",
			forsale: false,
			available: false,
		},
		{
			id: 8,
			title: "Raleigh",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: raleigh,
			description: "An expressive portrait of Raleigh.",
			forsale: false,
			available: false,
		},
		{
			id: 9,
			title: "Sunny",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait", "light"],
			image: sunny,
			description: "A bright portrait of Sunny.",
			forsale: false,
			available: false,
		},
		{
			id: 11,
			title: "Blue Jay",
			year: "2024",
			medium: "Watercolor",
			tags: ["bird", "watercolor"],
			image: blueJay,
			description: "A Blue Jay in vivid watercolor.",
			forsale: true,
			available: true,
		},
		{
			id: 12,
			title: "Chickadee",
			year: "2024",
			medium: "Watercolor",
			tags: ["bird", "small birds"],
			image: chickadee,
			description: "A sweet chickadee study.",
			forsale: true,
			available: true,
		},
		{
			id: 13,
			title: "Hips",
			year: "2012",
			medium: "Fiber Art",
			tags: ["fiber", "abstract"],
			image: hips,
			description: "Fiber abstraction of hips.",
			forsale: false,
			available: true,
		},
	]);

	const location = useLocation();
	const navigate = useNavigate();

	// This grabs the artwork ID from the modal route like /art/4
	const modalId = location.pathname.startsWith("/art/")
		? parseInt(location.pathname.split("/art/")[1])
		: null;

	const selectedArt = artworks.find((art) => art.id === modalId);

	useEffect(() => {
		const disableContextMenu = (e) => e.preventDefault();
		document.addEventListener("contextmenu", disableContextMenu);
		return () =>
			document.removeEventListener("contextmenu", disableContextMenu);
	}, []);

	return (
		<div className='container'>
			{/* HEADER */}
			<header className='main-header'>
				<div className='header-left'>
					<div className='logo-image-container'>
						<img
							src={portrait1}
							alt='Portrait 1'
							className='logo-image primary'
						/>
						<img
							src={portrait2}
							alt='Portrait 2'
							className='logo-image secondary'
						/>
					</div>

					<div className='social-links'>
						<a
							href='https://www.linkedin.com/in/katiebaeten/'
							className='social-link linkedin'
							target='_blank'
							rel='noreferrer'
							aria-label='LinkedIn'
						>
							<FontAwesomeIcon icon={faLinkedin} size='lg' />
						</a>
						<a
							href='https://github.com/ktb8n'
							className='social-link github'
							target='_blank'
							rel='noreferrer'
							aria-label='Github'
						>
							<FontAwesomeIcon icon={faGithub} size='lg' />
						</a>
						<a
							href='https://instagram.com/ktb8n.art'
							className='social-link instagram'
							target='_blank'
							rel='noreferrer'
							aria-label='Instagram'
						>
							<FontAwesomeIcon icon={faInstagram} size='lg' />
						</a>
						<a
							href='https://bsky.app/profile/ktb8n.bsky.social'
							className='social-link bluesky'
							target='_blank'
							rel='noreferrer'
							aria-label='Bluesky'
						>
							<FontAwesomeIcon icon={faBluesky} size='lg' />
						</a>
						<a
							href={resumePDF}
							target='_blank'
							rel='noreferrer'
							aria-label='CV'
						>
							CV
						</a>
					</div>
				</div>

				{/* Navigation with active link highlighting */}
				<nav className='header-nav'>
					<NavLink
						to='/art'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Art
					</NavLink>
					<NavLink
						to='/dev'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Engineering
					</NavLink>
					<NavLink
						to='/curriculum'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Curriculum
					</NavLink>
				</nav>
			</header>

			{/* MAIN ROUTING */}
			<main className='main'>
				<Routes>
					<Route path='/' element={<Navigate to='/art' />} />
					<Route path='/art' element={<ArtGallery artworks={artworks} />} />
					<Route path='/dev' element={<DevGallery />} />
					<Route path='/curriculum' element={<CurriculumGallery />} />
				</Routes>
			</main>

			{/* FOOTER */}
			<footer>
				<small>&copy; {new Date().getFullYear()} Morrowroot Studio</small>
			</footer>

			{/* ART MODAL ROUTING - only shows if /art/:id is active */}
			{selectedArt && (
				<ArtDetailModal
					artwork={selectedArt}
					onClose={() => navigate("/art")}
				/>
			)}
		</div>
	);
}

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

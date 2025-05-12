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
// import cavePointImage from "./assets/art/KtB8n_OilPaint_CavePointTamaracks_2024.jpg";
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
import cityEdge from "./assets/art/KtB8n_WaterColor_CityEdge.jpg";
import castorPortrait from "./assets/art/Ktb8n-Digital -LineDrawing_Castor.png";
import coloringBook from "./assets/art/Ktb8n-Digital-ColoringBook.jpg";
import woodenCreature from "./assets/art/Ktb8n-Wood-Creatures.jpg";
import baca from "./assets/art/Ktb8n_OilPaint_FishingWithBaca_2024.jpg";
import coffeeGrinder from "./assets/art/Ktb8n_OilPaint_MorningLightCoffee_2024.jpg";
import potpark from "./assets/art/Ktb8n_OilPaint_PotPark2025.jpg";
import bedroom from "./assets/art/Ktb8n_OilPaint_RoomPortrait.jpg";
import stickNLink from "./assets/art/Ktb8n_OilPaint_StickAndLink_2024.jpg";
import EdGallery from "./components/EdGallery";
import classRoomManagement from "./assets/ed/ClassRoomManagement.JPG";
import classRoomManagement1 from "./assets/ed/ClassRoomManagement1.JPG";
import classRoomManagement2 from "./assets/ed/ClassRoomManagement2.jpeg";
import classRoomManagement3 from "./assets/ed/ClassRoomManagement3.JPG";
import classRoomManagement4 from "./assets/ed/ClassRoomManagement4.JPG";
import classRoomManagement6 from "./assets/ed/ClassRoomManagement6.JPG";
import classRoomManagement7 from "./assets/ed/ClassRoomManagement7.JPG";
import classRoomManagement8 from "./assets/ed/ClassRoomManagement8.JPG";
import curriculum3 from "./assets/ed/Curriculum3.JPG";
import curriculum4 from "./assets/ed/Curriculum4.JPG";
import curriculum5 from "./assets/ed/Curriculum5.JPG";
import instructionFamilyArtDay from "./assets/ed/Instruction-FamilyArtDay.jpeg";
import instructionSunrise1 from "./assets/ed/Instruction-Sunrise1.JPG";
import lcoArtShow from "./assets/ed/LCOArtShow.JPG";
import studentArt1 from "./assets/ed/StudentArt2.JPG";
import studentArt2 from "./assets/ed/StudentArt2.JPG";
import studentArt3 from "./assets/ed/StudentArt3.JPG";
import studentArt4 from "./assets/ed/StudentArt4.JPG";
import studentArt5 from "./assets/ed/StudentArt5.JPG";
import studentArt7 from "./assets/ed/StudentArt7.JPG";
import studentArt9 from "./assets/ed/StudentArt9.JPG";
import StudentChallenges from "./assets/ed/StudentChallenges.JPG";
import StudentCritique from "./assets/ed/StudentCritiques.JPG";
import StudentCritique2 from "./assets/ed/StudentCritique2.JPG";
import Worktime5 from "./assets/ed/Worktime5.JPG";
import Worktime6 from "./assets/ed/Worktime6.JPG";
import Worktime7 from "./assets/ed/Worktime7.JPG";
import Worktime8 from "./assets/ed/Worktime8.JPG";
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
	const [artworks] = useLocalStorage("morrowroot-artwork", [
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
		// {
		// 	id: 2,
		// 	title: "Cave Point Tamaracks",
		// 	year: "2024",
		// 	medium: "Oil Paint",
		// 	tags: ["landscape", "tamarack", "trees"],
		// 	image: cavePointImage,
		// 	description: "Golden tamaracks at Cave Point.",
		// 	forsale: true,
		// 	available: true,
		// },
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
			title: "Gil Scott-Heron",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScot,
			description: "Portrait of Gil Scott-Heron as a young man.",
			forsale: true,
			available: true,
		},
		{
			id: 5,
			title: "Gil Scott-Heron",
			year: "2025",
			medium: "Oil Paint",
			tags: ["portrait"],
			image: gilScotSr,
			description: "Portrait of Gil Scott in modern times.",
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
			description: "Fiber abstraction of hips embroidered on terry cloth.",
			forsale: false,
			available: true,
		},
		{
			id: 14,
			title: "City Edge",
			year: "2012",
			medium: "Fiber Art",
			tags: ["watercolor", "abstract"],
			image: cityEdge,
			description:
				"whimsical landscape exploring the edge of city infrastructure and nature.",
			forsale: false,
			available: true,
		},
		{
			id: 15,
			title: "Castor",
			year: "2023",
			medium: "Digital Line Drawing",
			tags: ["digital", "line art", "portrait"],
			image: castorPortrait,
			description: "Line drawing of a beloved companion, Castor.",
			forsale: false,
			available: true,
		},
		{
			id: 16,
			title: "Coloring Book Page",
			year: "2023",
			medium: "Digital",
			tags: ["digital", "coloring book", "line art"],
			image: coloringBook,
			description: "Playful digital drawing designed for coloring activity.",
			forsale: false,
			available: true,
		},
		{
			id: 17,
			title: "Wooden Creatures",
			year: "2023",
			medium: "Wood Sculpture",
			tags: ["wood", "sculpture", "creature"],
			image: woodenCreature,
			description:
				"Whimsical wooden creatures from found and carved wood forms.",
			forsale: false,
			available: true,
		},
		{
			id: 18,
			title: "Fishing with Baca",
			year: "2024",
			medium: "Oil Paint",
			tags: ["oil paint", "portrait", "family"],
			image: baca,
			description: "Portrait of a grandfather fishing with his grandchild.",
			forsale: true,
			available: true,
		},
		{
			id: 19,
			title: "Morning Light and Coffee Grinder",
			year: "2024",
			medium: "Oil Paint",
			tags: ["oil paint", "still life", "light"],
			image: coffeeGrinder,
			description: "A quiet morning scene captured in soft oil tones.",
			forsale: true,
			available: true,
		},
		{
			id: 20,
			title: "Pot Park",
			year: "2025",
			medium: "Oil Paint",
			tags: ["oil paint", "landscape", "urban"],
			image: potpark,
			description:
				"A painterly interpretation of an industrial park reclaimed by nature.",
			forsale: true,
			available: true,
		},
		{
			id: 21,
			title: "Bedroom Portrait",
			year: "2024",
			medium: "Oil Paint",
			tags: ["oil paint", "interior", "portrait"],
			image: bedroom,
			description: "Personal space rendered in soft oil textures.",
			forsale: false,
			available: true,
		},
		{
			id: 22,
			title: "Stick and Link",
			year: "2024",
			medium: "Oil Paint",
			tags: ["oil paint"],
			image: stickNLink,
			description:
				"A portrait of relationship, rendered with symbolic abstraction.",
			forsale: false,
			available: true,
		},
	]);
const [educationEvidence] = useLocalStorage("morrowroot-education", [
	{
		id: 1,
		title: "Station Cards",
		year: "2018",
		medium: "Instruction Cards",
		tags: ["process", "publishing", "reflection"],
		image: classRoomManagement,
		description:
			"These cards served as a way to manage the number of seats per station (students chose cards as they came in, reserving their seat at a station). They also provided students a reminder of expectations and behavior.",
	},
	{
		id: 2,
		title: "Art Class Set Up and Clean Up Display",
		year: "",
		medium: "Instruction",
		tags: ["cleanup", "responsibility", "organization"],
		image: classRoomManagement1,
		description:
			"This system managed the simultaneous set up of a class of students...",
	},
	{
		id: 3,
		title: "Painting Center",
		year: "",
		medium: "Classroom Set Up",
		tags: ["painting", "media", "technique"],
		image: classRoomManagement2,
		description:
			"Students were responsible for the set up and clean up of all materials...",
	},
	{
		id: 4,
		title: "Drawing Center",
		year: "",
		medium: "Instruction Card",
		tags: ["cleanup", "painting", "tools"],
		image: classRoomManagement3,
		description:
			"Students were given access to observation tools and a variety of media...",
	},
	{
		id: 5,
		title: "Hand Washing",
		year: "",
		medium: "Instruction Card",
		tags: ["sculpture", "3D art", "materials"],
		image: classRoomManagement4,
		description:
			"I develop a less-than-5 step process for anything that needs to be done quickly...",
	},
	{
		id: 6,
		title: "SketchBook Storage",
		year: "",
		medium: "Classroom Management",
		tags: ["drawing", "observation", "medium"],
		image: classRoomManagement6,
		description:
			"Students kept sketchbooks in the art room, used for art challenges...",
	},
	{
		id: 7,
		title: "Resource Center",
		year: "",
		medium: "Instruction Card",
		tags: ["artwork", "naming", "instructions"],
		image: classRoomManagement7,
		description:
			"To cultivate a sense of artistic behavior, I keep a resource center stocked with images...",
	},
	{
		id: 8,
		title: "Instruction Zone",
		year: "",
		medium: "Instruction Card",
		tags: [
			"crafting",
			"materials",
			"exploration",
			"Grade 3",
			"Grade 4",
			"Grade 5",
		],
		image: classRoomManagement8,
		description:
			"Space dedicated to art discussions and lessons—away from the mess of the art stations.",
	},
	{
		id: 9,
		title: "Third Grade Learning Targets",
		year: "",
		medium: "Instruction Card",
		tags: ["Learning Targets", "Assessment", "Curriculum", "Grade 3"],
		image: curriculum3,
		description:
			"Assessment and tracking of student progress came through 2–5 minute 1:1 meetings...",
	},
	{
		id: 10,
		title: "Fourth Grade Learning Targets",
		year: "",
		medium: "Instruction Card",
		tags: ["Learning Targets", "Assessment", "Curriculum"],
		image: curriculum4,
		description:
			"Assessment and tracking of student progress came through 2–5 minute 1:1 meetings...",
	},
	{
		id: 11,
		title: "Fifth Grade Learning Targets",
		year: "",
		medium: "Instruction Card",
		tags: ["Learning Targets", "Assessment", "Curriculum", "Grade 5"],
		image: curriculum5,
		description:
			"Assessment and tracking of student progress came through 2–5 minute 1:1 meetings...",
	},
	{
		id: 12,
		title: "Family Art Day Instruction",
		year: "",
		medium: "Learning Targets",
		tags: ["Family Art Day", "Community", "Instruction"],
		image: instructionFamilyArtDay,
		description:
			"Family Art Day is a drop-in public art project I design monthly based on a visiting artist’s work...",
	},
	{
		id: 13,
		title: "4th Grade Art Instruction",
		year: "",
		medium: "Art Lessons",
		tags: ["Public School", "Art Lessons", "Instruction", "Grade 4"],
		image: instructionSunrise1,
		description:
			"Each class follows the structure: Art Challenge → Art Talk → Studio Time → Reflection...",
	},
	{
		id: 14,
		title: "Lac Courtes Oreilles Art Show",
		year: "",
		medium: "Art Show",
		tags: ["Public School", "Art Show", "Display"],
		image: lcoArtShow,
		description:
			"The Lac Courtes Oreilles reservation hosts a yearly display of student work...",
	},
	{
		id: 15,
		title: "Beauty",
		year: "2018",
		medium: "Colored Pencils",
		tags: ["Published", "Student Art", "Imagination", "Grade 2"],
		image: studentArt2,
		description:
			"Students were responsible for publishing their artwork for hallway galleries...",
	},
	{
		id: 16,
		title: "Sunflower",
		year: "",
		medium: "Paint",
		tags: ["Published", "Student Art", "Imagination", "Grade 4"],
		image: studentArt4,
		description:
			"Student-created artwork demonstrating individuality and application of the studio setup process...",
	},
	{
		id: 16,
		title: "Value",
		year: "",
		medium: "Colored Pencils",
		tags: ["Published", "Student Art", "Imagination", "Grade 4"],
		image: studentArt3,
		description:
			"Student-created artwork demonstrating individuality and application of the studio setup process...",
	},
	{
		id: 17,
		title: "Untitled",
		year: "",
		medium: "Oil Pastels",
		tags: ["Published", "Student Art", "Observational Drawing", "Grade 2"],
		image: studentArt1,
		description:
			"Student-created artwork demonstrating individuality and application of the studio setup process...",
	},
	{
		id: 18,
		title: "Puffy",
		year: "",
		medium: "Marker",
		tags: ["Published", "Student Art", "Observational Drawing", "Grade 1"],
		image: studentArt5,
		description:
			"This is the first published piece from a student who often struggled to manage their behavior in a classroom setting. This piece was a breakthrough for them, and they were so proud to have it displayed in the hallway.",
	},
	{
		id: 19,
		title: "Illegal",
		year: "",
		medium: "Multi-Media",
		tags: ["Published", "Student Art", "Memory Drawing", "Grade 2"],
		image: studentArt7,
		description:
			"Student-created artwork demonstrating individuality and application of the studio setup process...",
	},
	{
		id: 20,
		title: "Dinosaur Artwork",
		year: "",
		medium: "Multi-Media",
		tags: ["Published", "Student Art", "Memory Drawing", "Grade 2"],
		image: studentArt9,
		description:
			"This student was often kept out of specials and unable to participate in situations where behavior heavily relies on social norms. This piece was a breakthrough for them, participating in the creation and publication of their artwork alongside their peers.",
	},
	{
		id: 21,
		title: "Art Challenge",
		year: "",
		medium: "Educational Tools",
		tags: ["Art Challenge", "Classroom Management", "Resources"],
		image: StudentChallenges,
		description:
			"Each class begins with an art challenge, a 5 minute prompt to get students settled and focused. This is a great way to alleviate the often staggered arrival of students to specials classes in the elementary school setting and serves as a way to set a safe, respectful and responsible tone upon entering the art room.",
	},
	{
		id: 22,
		title: "Student Critique",
		year: "",
		medium: "Critique",
		tags: ["Critical Thinking", "Reflection", "Gallery", "Critique", "Grade 4"],
		image: StudentCritique,
		description:
			"Students end each class with a 5 minute reflection. We switch back and forth between individual reflection and group or partner reflection. This gives students a chance to share their thoughts and feelings about their artwork and begin processing the artwork of their peers.",
	},
	{
		id: 23,
		title: "Student Critique",
		year: "",
		medium: "Critique",
		tags: ["Critical Thinking", "Reflection", "Gallery", "Critique", "Grade 2"],
		image: StudentCritique2,
		description:
			"Students end each class with a 5 minute reflection. We switch back and forth between individual reflection and group or partner reflection. Once a trimester we embark on a gallery walk where we critique an artwork of their choosing from the published works in the hallway. This is a great way to build community and develop critical thinking skills.",
	},
	{
		id: 24,
		title: "Worktime",
		year: "",
		medium: "Paint",
		tags: ["Worktime", "Color Mixing", "Paint", "Grade 2"],
		image: Worktime5,
		description:
			"An example of introducing the painting procedure to second grade students. Students are given a choice of what method of ideation they'd like to use (imagination, memory, observation or mark-making. They then shown how to get their own paint, mix colors, get clean water, use a rag and clean up without my intervention. This is a great way to build independence and responsibility in the art room.",
	},
	{
		id: 25,
		title: "Worktime",
		year: "",
		medium: "Paint",
		tags: ["Worktime", "Color Mixing", "Paint", "Grade 1"],
		image: Worktime6,
		description:
			"An example of introducing the painting procedure to second grade students. Students are given a choice of what method of ideation they'd like to use (imagination, memory, observation or mark-making. They then shown how to get their own paint, mix colors, get clean water, use a rag and clean up without my intervention. This is a great way to build independence and responsibility in the art room.",
	},
	{
		id: 25,
		title: "Worktime",
		year: "",
		medium: "Paint",
		tags: ["Worktime", "Color Mixing", "Paint", "Grade 1"],
		image: Worktime7,
		description:
			"An example of the peace and calm that can be achieved in the art room when students are given the tools to be independent and responsible. This is a great way to build independence and responsibility in the art room.",
	},
	{
		id: 25,
		title: "Worktime",
		year: "",
		medium: "Paint",
		tags: ["Worktime", "Observational Drawing", "Colored Pencils", "Grade 4"],
		image: Worktime8,
		description:
			"Shown here is an example of classroom management during the height of covid pandemic precautions. Instead of having students collect supplies following studio traffic patterns, I adjusted their planning process to mitigate the amount of students in a certain area of the room. Students had do first fill out their daily art plan: identifying where their idea is coming from, choosing a medium, sketching their idea and then raising their hand to have a brief discussion with me before collecting their supplies. This was a great way to connect with artists before they began - a process I kept once distancing was no longer a concern.",
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
						to='/ed'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Curriculum
					</NavLink>
				</nav>
			</header>

			{/* MAIN ROUTING */}
			<main className='main'>
				<Routes>
					<Route path='/' element={<Navigate to='/ed' />} />
					<Route path='/art' element={<ArtGallery artworks={artworks} />} />
					<Route path='/dev' element={<DevGallery />} />
					<Route path='/ed' element={<EdGallery edworks={educationEvidence} />} />
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

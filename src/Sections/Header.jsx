import { useLocation } from "react-router-dom";
import { NavLink, Link} from "react-router-dom";
const Header = () => {
	const location = useLocation()
	console.log(location)
	return (
		<div className="nav bg-black border-[2px] border-[#BCD1D9] border-l-0 border-t-0 border-r-0 flex gap-[2rem] py-[1rem] px-[2rem]">
			<img
				src={process.env.PUBLIC_URL + "assets/images/logo2.png"}
				className="w-[7rem] py-1rem"
				alt="not found"
			/>
			<div className="text-xl items-center menu gap-[3rem] flex flex-grow text-[#BCD1D9]  border-e-[2px] border-[#BCD1D9]">
				<Link to = '/'>Home</Link>
				<Link to = '/academic'>Academics</Link>
				<Link to = '/event'>Events</Link>
				<Link to = '/alumni'>Alumini</Link>
				<Link to = '/team'>Team</Link>
				<Link to = '/achievement'>Achievement</Link>
			</div>
			<div className="icons flex items-center justify-center space-x-7 py-[1rem]">
				<svg
					width="34"
					height="34"
					viewBox="0 0 34 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17 32.8539C25.7749 32.8539 32.8667 25.7438 32.8667 17C32.8667 8.25615 25.7749 1.14607 17 1.14607C8.22511 1.14607 1.13333 8.25615 1.13333 17C1.13333 25.7438 8.22511 32.8539 17 32.8539ZM17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
						fill="#4C7584"
					/>
					<path
						d="M28.5222 6.11236H5.47778L8.87778 9.64607L14.9222 9.71714V17.764L8.78333 12.3202V25.2135L12.1833 28.7472L12.0889 17L14.9222 18.2416V27.4783L16.8111 30.7528L18.7 27.4783V18.3371L21.5333 17.0955L21.4389 28.8427L24.8389 25.309V12.4157L18.7 17.8596V9.76156L25.1222 9.83708L28.5222 6.11236Z"
						fill="#4C7584"
					/>
				</svg>
				<svg
					width="34"
					height="34"
					viewBox="0 0 34 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.0008 10.625C13.4878 10.625 10.6255 13.4871 10.6255 17C10.6255 20.5129 13.4878 23.375 17.0008 23.375C20.5139 23.375 23.3761 20.5129 23.3761 17C23.3761 13.4871 20.5139 10.625 17.0008 10.625ZM33.3641 15.9707L27.0751 12.8297L29.2999 6.1625C29.5987 5.25938 28.742 4.40273 27.8455 4.7082L21.178 6.93281L18.0302 0.6375C17.6052 -0.2125 16.3965 -0.2125 15.9715 0.6375L12.8303 6.92617L6.15616 4.70156C5.25299 4.40273 4.39631 5.25937 4.70179 6.15586L6.92651 12.823L0.637531 15.9707C-0.21251 16.3957 -0.21251 17.6043 0.637531 18.0293L6.92651 21.1703L4.70179 27.8441C4.40295 28.7473 5.25963 29.6039 6.15616 29.2984L12.8237 27.0738L15.9648 33.3625C16.3899 34.2125 17.5985 34.2125 18.0235 33.3625L21.1647 27.0738L27.8322 29.2984C28.7354 29.5973 29.5921 28.7406 29.2866 27.8441L27.0619 21.177L33.3508 18.0359C34.2142 17.6043 34.2142 16.3957 33.3641 15.9707ZM23.0109 23.0098C19.697 26.3234 14.3046 26.3234 10.9908 23.0098C7.67693 19.6961 7.67693 14.3039 10.9908 10.9902C14.3046 7.67656 19.697 7.67656 23.0109 10.9902C26.3247 14.3039 26.3247 19.6961 23.0109 23.0098Z"
						fill="#4C7584"
					/>
				</svg>
			</div>
		</div>
	);
};
export default Header;

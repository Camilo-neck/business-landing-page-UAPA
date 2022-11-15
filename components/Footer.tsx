import Image from 'next/image';
import Link from 'next/link';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
// MUI Socials
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
		<footer className='mt-3 py-24 bg-gray-800 text-white w-full flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-24 2xl:gap-36 self-center text-center md:text-left'>
			<div className='flex flex-col md:flex-row gap-10'>
				{/**Col 1 */}
				<div className='flex flex-col gap-2'>
					<p className='text-lg font-semibold'>Pages</p>
					<div className='flex flex-col gap-2 self-auto xl:self-center text-gray-300'>
						<Link
							href="/"
							className='hover:underline'
						>
							Home
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Product
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Pricing
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							About
						</Link>
						<a
							href="#"
							className='hover:underline'
						>
							Contact
						</a>
					</div>
				</div>
				{/**Col 2 */}
				<div className='flex flex-col gap-2'>
					<p className='text-lg font-semibold'>Tomothy</p>
					<div className='flex flex-col gap-2 self-auto xl:self-center text-gray-300'>
						<Link
							href="/"
							className='hover:underline'
						>
							Eleanor Edwards
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Ted Robertson
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Annette Russel
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Jenne Mackinney
						</Link>
						<a
							href="#"
							className='hover:underline'
						>
							Gloria Richards
						</a>
					</div>
				</div>


				{/**Col 3 */}

				<div className='flex flex-col gap-2'>
					<p className='text-lg font-semibold'>Jane Black</p>
					<div className='flex flex-col gap-2 self-auto xl:self-center text-gray-300'>
						<Link
							href="/"
							className='hover:underline'
						>
							Philip Jones
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Product
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Colleen Russell
						</Link>
						<Link
							href="#"
							className='hover:underline'
						>
							Marvin Hawkins
						</Link>
						<a
							href="#"
							className='hover:underline'
						>
							Bruce Simmons
						</a>
					</div>
				</div>
			</div>

			{/**Col 4 */}
			<div className='flex flex-col gap-4'>
				<div className='flex flex-row items-center'>
					<LocationOnRoundedIcon className='text-gray-300' />
					<p className='ml-2'>7480 Mockingbird Hill undefined </p>
				</div>
				<div className='flex flex-row items-center'>
					<PhoneAndroidOutlinedIcon className='text-gray-300' />
					<p className='ml-2'>(239) 555-0108 </p>
				</div>
				<div className='flex flex-row gap-3 text-gray-300 w-full justify-center md:justify-start'>
					<TwitterIcon />
					<FacebookIcon />
					<LinkedInIcon />
				</div>
			</div>

			<br />
		</footer>
	);
};

export default Footer;
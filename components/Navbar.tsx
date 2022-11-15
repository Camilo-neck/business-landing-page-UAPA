import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// MUI Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// MUI Socials
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'Product', href: '#', current: false },
	{ name: 'Pricing', href: '#', current: false },
	{ name: 'About', href: '#', current: false },
	{ name: 'Contact', href: '#', current: false },
]
const socials = [
	{ name: 'Twitter', href: '#', icon: <TwitterIcon /> },
	{ name: 'Facebook', href: '#', icon: <FacebookIcon /> },
	{ name: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
]

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-transparent absolute z-1 w-full mt-5">
			{({ open }) => (
				<>
					<div className="flex text-center">
						<div className="relative grid h-16 px-10 w-full items-center justify-center text-center grid-cols-auto sm:grid-cols-[80%_10%_10%] md:grid-cols-[40%_40%_20%] lg:grid-cols-[25%_25%_20%]" >
							<div className="hidden sm:block">
								<div className="flex space-x-4">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className={classNames(
												item.current ? 'text-semibold text-white' : 'text-gray-300  hover:text-white',
												'px-3 md:px-1 lg:px-0 py-2 text-xs md:text-sm font-medium'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
							<div className="flex flex-shrink-0 flex-grow items-center justify-center">
								<img
									className="block h-8 w-auto"
									src="images/figma_logo.svg"
									alt="Your Company"
								/>
								{/* <img
									className="hidden h-8 w-auto lg:block"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/> */}
							</div>
							{/* <div className="flex flex-1 flex-grow items-center justify-center">
							</div> */}

							<div className="hidden sm:flex items-center pr-2 md:ml-16 sm:pr-0">
								{/* Socials Icons */}
								<Menu as="div" className="relative flex flex-row ml-3 row-span-full">
									{socials.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												'text-gray-300  hover:text-white',
												'flex flex-row px-1 py-2 rounded-md text-base font-medium items-center'
											)}
											aria-current={undefined}
										>
											{item.icon}
										</Disclosure.Button>
									))}
								</Menu>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<CloseRoundedIcon className="block h-6 w-6" aria-hidden="true" />
										// <span>X</span>
									) : (
										<MenuRoundedIcon className="block h-6 w-6" aria-hidden="true" />
										// <span>Bar<span>
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="bg-black sm:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? 'text-white font-semibold' : 'text-gray-300 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
							<hr />
							{socials.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										'text-gray-300 hover:text-white',
										'flex flex-row gap-2 px-3 py-2 rounded-md text-base font-medium items-center'
									)}
									aria-current={undefined}
								>
									{item.icon}
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

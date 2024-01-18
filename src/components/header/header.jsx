'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Image from 'next/image'
import Clients from './Clients/Clients.jsx'
import Community from './Community/Community.jsx'
const Header = () => {
	return (
		<header className='container'>
			<Clients />
			<Community />
		</header>
	)
}

export default Header

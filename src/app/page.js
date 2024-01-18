import Image from 'next/image'

import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header'
import Clients from '@/components/clients/clients'
import Community from '@/components/community/community'

export default function Home() {
	return (
		<main>
			<div className='bg-silver'>
				<Navbar />
				<Header />
			</div>
			<Clients />
			<Community />
		</main>
	)
}

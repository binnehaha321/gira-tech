import Image from 'next/image'

import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import Clients from '@/components/clients/clients'
import Community from '@/components/community/community'
import Customer from '@/components/customer/customer'
import Community2 from '@/components/community2/community2'
export default function Home() {
	return (
		<main>
			<div className='bg-silver'>
				<Navbar />
				<Header />
			</div>
			<Clients />
			<Community />
			<Customer />
			<Community2 />
		</main>
	)
}

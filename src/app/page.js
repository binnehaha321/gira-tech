import Image from 'next/image'

import Header from '@/components/header'
import Navbar from '@/components/navbar'

export default function Home() {
	return (
		<main>
			<Navbar />
			<Header />
		</main>
	)
}

import Image from 'next/image'

import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header'
import Clients from '@/components/clients/clients'
import Community from '@/components/community/community'
import Content from '@/components/content'
import Achievements from '@/components/achievements'
import Footer from '@/components/footer/footer'

export default function Home() {
	return (
		<main>
			<div className='bg-silver'>
				<Navbar />
				<Header />
			</div>
			<Clients />
			<Community />
			<Content
				srcPic='/images/content/content-1.png'
				title='The unseen of spending three years at Pixelgrade'
				content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
			/>
			<Achievements />
			<Content
				srcPic='/images/content/content-2.png'
				title='How to design your site footer like we did'
				content='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'
			/>
			<Footer />
		</main>
	)
}

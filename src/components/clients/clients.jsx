import Image from 'next/image'
import { Flex } from 'antd'

import { logos } from './logos'

export default function Clients() {
	return (
		<div className='container my-10'>
			<Flex
				vertical
				gap={16}
			>
				<div className='space-y-[6px]'>
					<p className='text-center font-semibold text-2xl leading-8 text-D_grey'>
						Our Clients
					</p>
					<p className='text-center text-grey'>
						We have been working with some Fortune 500+ clients
					</p>
				</div>
				<Flex
					justify='space-between'
					className='py-8'
				>
					{logos.map((logo, index) => (
						<Image
							key={index}
							src={logo}
							alt='logo'
							width={40}
							height={40}
						/>
					))}
				</Flex>
			</Flex>
		</div>
	)
}

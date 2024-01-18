import React from 'react'
import Image from 'next/image'
import { Flex } from 'antd'
import { logos } from './Logos'
export default function Clients() {
	return (
		<Flex
			vertical
			gap={20}
		>
			<Flex
				vertical
				gap={5.57}
			>
				<p className='text-center font-semibold text-2xl leading-8 text-D_grey'>
					Our Clients
				</p>
				<p className='text-center text-grey'>
					We have been working with some Fortune 500+ clients
				</p>
			</Flex>
			<Flex justify='space-between'>
				{logos.map((logo, index) => (
					<Image
						key={index}
						src={logo}
						alt='logo'
						width={33.41}
						height={33.41}
					/>
				))}
			</Flex>
		</Flex>
	)
}

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Flex, Button } from 'antd'

import { data } from './data'

export default function Customer() {
	const [currentCustomer, setCurrentCustomer] = useState(0)
	const { image, content, name, organization, logos } = data[currentCustomer]

	return (
		<div className='container mt-12'>
			<Flex>
				<div className='w-[548px]'>
					<Image
						className='m-auto'
						src={image}
						alt='customerImage'
						width={326}
						height={326}
					/>
				</div>

				<div className='w-[748px]'>
					<p className='w-[748px] pb-8 text-grey font-medium leading-8'>
						{content}
					</p>
					<div>
						<p className='pb-2 text-primary font-semibold leading-8 text-xl'>
							{name}
						</p>
						<p className='font-normal text-base leading-3 text-L_grey'>
							{organization}
						</p>
					</div>
					<Flex
						justify='space-between'
						className='h-[48px] mt-8'
					>
						<Flex
							justify='space-between'
							className='w-[493px] h-full'
						>
							{logos.map((logo) => (
								<Image
									key={logo}
									src={logo}
									alt='logo'
									width={48}
									height={48}
									quality={100}
								/>
							))}
						</Flex>
						<Flex
							justify='center'
							align='center'
						>
							<Button
								type='link'
								className='!font-semibold !text-xl'
							>
								Meet all customers &rarr;
							</Button>
						</Flex>
					</Flex>
				</div>
			</Flex>
		</div>
	)
}

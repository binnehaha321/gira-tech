'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Flex, Button } from 'antd'
import { motion } from 'framer-motion'

import { data } from './data'

export default function Customer() {
	const [currentCustomer, setCurrentCustomer] = useState(0)
	const [currentLogo, setCurrentLogo] = useState(0)
	const { image, content, name, organization, logos } = data[currentCustomer]

	const handleCurrentLogo = (index) => {
		setCurrentLogo(index)
	}

	const handleCurrentCustomer = (index) => {
		setCurrentCustomer(index)
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={currentCustomer}
			transition={{ duration: 2 }}
			className='container mt-12 hover:cursor-pointer'
			onClick={() =>
				handleCurrentCustomer(
					currentCustomer + 1 > data.length - 1 ? 0 : currentCustomer + 1
				)
			}
		>
			<Flex className='responsive-flex'>
				<div className='w-[548px]'>
					<Image
						className='m-auto'
						src={image}
						alt='customerImage'
						width={326}
						height={326}
					/>
				</div>

				<div>
					<p
						className={`mx-auto w-dvw pb-8 text-grey font-medium leading-8 ${'lg:w-[748px] lg:mx-0'}`}
					>
						{content}
					</p>
					<div>
						<p
							className={`pb-2 text-primary font-semibold leading-8 text-xl text-center ${'lg:text-left'}`}
						>
							{name}
						</p>
						<p
							className={`font-normal text-base leading-3 text-L_grey text-center ${'lg:text-left'}`}
						>
							{organization}
						</p>
					</div>
					<Flex
						justify='space-between'
						className='h-[48px] mt-8 responsive-flex'
					>
						<Flex
							justify='space-between'
							className={`w-dvw h-full px-8 ${'lg:w-[493px]'}`}
						>
							{logos.map((logo, index) => (
								<Image
									key={logo}
									src={logo}
									alt='logo'
									width={48}
									height={48}
									quality={100}
									onClick={() => handleCurrentLogo(index)}
									className={`customerCurrentLogo ${currentLogo === index ? 'active' : ''} w-10 h-10  ${'lg:w-12 lg:h-12'}`}
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
		</motion.div>
	)
}

import Image from 'next/image'
import { Flex } from 'antd'
import { logos } from './logos'
import Demo from './demo'
function Footer() {
	const listItem = [
		{
			title: 'Company',
			listItem: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials']
		},
		{
			title: 'Support us',
			listItem: [
				'Help center',
				'Terms of service',
				'Legal',
				'Privacy policy',
				'Status'
			]
		}
	]
	return (
		<div>
			<Demo />
			<div className='bg-secondary py-[64px]'>
				<Flex
					className='container'
					justify='space-between'
				>
					<Flex
						vertical
						gap={40}
					>
						<Image
							width={191}
							height={30}
							src='/images/base/logoFooter.png'
							alt='Gira Tech Logo'
						/>
						<div className='text-silver'>
							<p>Copyright © 2020 Nexcent ltd.</p>
							<p className='mt-[8px]'>All rights reserved</p>
						</div>
						<Flex gap={16}>
							{logos.map((logo, index) => {
								return (
									<Image
										key={index}
										width='0'
										height='0'
										src={logo}
										alt='Social Logo'
										style={{ width: '32px', height: 'auto' }}
									/>
								)
							})}
						</Flex>
					</Flex>
					<Flex gap={30}>
						{listItem.map((item, index) => {
							return (
								<div
									key={index}
									className='w-40'
								>
									<p className='text-white font-semibold text-xl'>
										{item.title}
									</p>
									<Flex
										vertical
										gap={12}
										className='mt-6'
									>
										{item.listItem.map((item, index) => {
											return (
												<div
													key={index}
													className='text-silver font-normal text-sm'
												>
													{item}
												</div>
											)
										})}
									</Flex>
								</div>
							)
						})}
						<div>
							<p className='text-white font-semibold text-xl mb-6'>
								Stay up to date
							</p>
							<div className='relative rounded-lg h-10 '>
								<input
									className='w-full h-full opacity-20  px-2 rounded-lg placeholder-gray-500'
									placeholder='Your name address'
								/>
								<Image
									className='absolute right-2 top-3'
									width='0'
									height='0'
									src='/images/footer/send.png'
									alt='Social Logo'
									style={{ width: '18px', height: 'auto' }}
								/>
							</div>
						</div>
					</Flex>
				</Flex>
			</div>
		</div>
	)
}

export default Footer

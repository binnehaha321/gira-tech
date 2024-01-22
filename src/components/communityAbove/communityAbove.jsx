import Image from 'next/image'
import { Flex } from 'antd'

import { frames } from './frames'

export default function CommunityAbove() {
	return (
		<Flex
			vertical
			className='mt-7'
			rootClassName='container py-8'
		>
			<Flex
				vertical
				align='center'
			>
				<p
					className={`text-center font-semibold text-4xl leading-[44px] text-D_grey w-[342px] ${'lg:w-[542px]'} ${'md:w-[442px]'} `}
				>
					Manage your entire community in a single system
				</p>
				<p className='text-center text-grey'>Who is Nextcent suitable for?</p>
			</Flex>
			<Flex
				justify='space-between'
				className='responsive-flex'
			>
				{frames.map(({ title, content, logo }, index) => (
					<Flex
						key={index}
						vertical
						justify='center'
						align='center'
						className='w-[299px] text-center'
					>
						<Image
							src={logo}
							alt='frame'
							width={65}
							height={56}
							quality={100}
						/>
						<p
							className={`text-center font-bold text-3xl leading-9 text-D_grey h-[72px] w-[266px] ${'lg:w-[266px]'} ${'md:w-dvw'} `}
						>
							{title}
						</p>
						<p className='text-sm text-grey'>{content}</p>
					</Flex>
				))}
			</Flex>
		</Flex>
	)
}

import { Flex, Col, Row } from 'antd'
import { MemberIcon, ClubIcon, EventBookIcon, PaymentIcon } from './icons'

const icons = [
	{ icon: <MemberIcon />, number: '2,245,341', label: 'Member' },
	{ icon: <ClubIcon />, number: '46,328', label: 'Clubs' },
	{ icon: <EventBookIcon />, number: '828,867', label: 'Event Bookings' },
	{ icon: <PaymentIcon />, number: '1,926,436', label: 'Payments' }
]

function Achievements() {
	return (
		<div className='bg-silver '>
			<Row
				justify='space-between'
				className='container w-full py-[64px]'
			>
				<Col span={12}>
					<Flex
						vertical
						justify='center'
						className='h-full'
					>
						<div className='font-semibold text-4xl mr-[132px]'>
							<span className='text-D_grey block'>Helping a local </span>
							<span className='text-primary '>business reinvent itself</span>
						</div>
						<p className='mt-2'>
							We reached here with our hard work and dedication
						</p>
					</Flex>
				</Col>
				<Col span={12}>
					<Row gutter={[0, 40]}>
						{icons.map((item, index) => (
							<Col
								key={index}
								xs={24}
								sm={12}
							>
								<Flex
									key={index}
									gap={16}
									align='center'
								>
									{item.icon}
									<Flex
										vertical
										xs={24}
									>
										<p className='font-bold text-[28px]'>{item.number}</p>
										<p className='text-grey'>{item.label}</p>
									</Flex>
								</Flex>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default Achievements

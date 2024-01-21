import { Flex, Button } from 'antd'
import { DownIcon } from '../icons'

function Demo() {
	return (
		<div className='bg-silver py-[64px]'>
			<Flex
				vertical
				gap={32}
				align='center'
				justify='center'
			>
				<h2 className=' text-black text-[64px] font-semibold w-6/12 text-center'>
					Pellentesque suscipit fringilla libero eu.
				</h2>
				<Button
					type='primary'
					style={{ padding: '14px 32px', height: '52px !important' }}
					className='flex items-center'
				>
					<Flex
						gap={8}
						align='center'
					>
						<p>Get a Demo</p>
						<DownIcon />
					</Flex>
				</Button>
			</Flex>
		</div>
	)
}

export default Demo

'use client'
import Image from 'next/image'
import { Flex, Button } from 'antd'

function Content({srcPic,title,content}) {
	return <div className='container'>
        <Flex align='center' justify='space-between'>
            <Image  
                style={{
                    height: '433px',
                  }}
                width={442}
                height={433}
                src = {srcPic}
                alt = 'Content'
            />
            <Flex  gap={32} vertical align='start'>
                <div className='mr-[60px]'>
                    <h2 className='text-D_grey text-4xl font-semibold leading-9'>{title}</h2>
                    <p className = 'mt-4 text-grey leading-[24px]'>{content}</p>
                </div>
                <Button type = 'primary' className = 'px-8 py-[14px]'>Learn More</Button>
            </Flex>
        </Flex>
    </div>
}

export default Content

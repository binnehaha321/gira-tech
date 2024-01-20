'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import Slide from './slide'

const Header = () => {
	return (
		<header className='container'>
			<Carousel
				showThumbs={false}
				showArrows={true}
				autoPlay
				infiniteLoop
				renderIndicator={(onClickHandler, isSelected, index, label) => {
					const dotStyle = {
						width: 10,
						height: 10,
						borderRadius: '50%',
						backgroundColor: isSelected ? '#4CAF4F' : '#717171',
						display: 'inline-block',
						margin: '0 5px',
						cursor: 'pointer'
					}

					return (
						<span
							style={dotStyle}
							onClick={onClickHandler}
							onKeyDown={onClickHandler}
							value={index}
							key={index}
							role='button'
							tabIndex={0}
							aria-label={`${label} ${index + 1}`}
						/>
					)
				}}
			>
				<Slide />
				<Slide />
				<Slide />
			</Carousel>
		</header>
	)
}

export default Header

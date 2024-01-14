'use client'

import { ConfigProvider } from 'antd'

const Provider = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#4CAF4F',
					borderRadius: 4,
					colorBgContainer: '#f6ffed',
					fontFamily: 'Inter, sans-serif',
					fontSize: 16
				},
				components: {
					Button: {
						/* General */
						fontWeight: 500,
						fontSize: 16,
						lineHeight: 24,
						controlHeight: 46,

						/* Link */
						colorLink: '#4CAF4F',
						colorLinkHover: '#388E3B',
						colorLinkActive: '#388E3B',

						/* Default */
						defaultBorderColor: '#4CAF4F',
						defaultColor: '#4CAF4F',
						defaultBg: '#FFF'
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export default Provider

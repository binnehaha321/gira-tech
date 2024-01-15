import { Inter } from 'next/font/google'

import { AntdRegistry } from '@ant-design/nextjs-registry'

import './globals.css'
import Provider from '@/lib/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Gira Tech',
	description: 'Gira Tech supplies cutting-edge for your business solutions.'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<AntdRegistry>{children}</AntdRegistry>
				</Provider>
			</body>
		</html>
	)
}

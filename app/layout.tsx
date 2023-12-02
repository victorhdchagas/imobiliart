import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
	title: "Mobiliart - Gestor virtual de contabilidade para condominios",
	description:
    "Gestor de contabilidade para condominios",
}

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({
	children
}: {
  children: React.ReactNode,
  types:any
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.variable}>
				{children}
			</body>
		</html>
	)
}

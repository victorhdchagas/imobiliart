
import React from "react"

export default function RootLayout({
	children,
	condominio,
}: {
  children: React.ReactNode,
  condominio:React.ReactNode
}) {

	return (
		<>
			{children}
			{condominio}
		</>
	)
}

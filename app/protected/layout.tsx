import Sitemap from "@/components/Sitemap"
import Sidebar from "@/components/menu/sidebar"
import SessionProvider from "@/components/no-ui/SessionProvider"
import React from "react"

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<SessionProvider>
			<main className="h-screen min-w-full flex flex-row justify-start">
				<Sidebar/>
				<div className="w-full h-full  flex flex-col justify-start">
					<Sitemap/>
					{children}
				</div>
			</main>
		</SessionProvider>
	)
}

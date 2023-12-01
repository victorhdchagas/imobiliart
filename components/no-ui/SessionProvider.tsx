"use client";
import { SessionProvider as NextSessionProvider } from "next-auth/react";

export default function SessionProvider({children}:React.PropsWithChildren) {
	return (
        
		<NextSessionProvider>{children}</NextSessionProvider>
	)
}

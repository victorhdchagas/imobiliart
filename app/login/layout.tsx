import useServerSession from "@/lib/auth/useSession";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Login | Mobiliart - Gestor virtual de contabilidade para condominios",
	description:
    "Gestor de contabilidade para condominios",
}
export default async function RootLayout({
	children,
}: {
  children: React.ReactNode,
}) {
	const session = await useServerSession();
	if(session?.user) redirect("/protected")

	return (
		<>
			{children}
		</>
	)
}

import Image from "next/image"
import Link from "next/link"

// export const dynamic = "force-dynamic"

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<section className="container flex flex-row justify-between  items-center px-5">
				<div className="flex flex-col justify-center items-center w-full">
					<span className="text-4xl text-gray-800 font-extrabold">Mobiliart</span>
					<span className="text-md text-gray-600 italic self-end pr-10 ">Tranquilidade para seu condominio</span>
					<span className="self-end pr-14">Clique aqui para <Link href="/login" className="text-blue-700 font-semibold italic">Acessar</Link></span>
				</div>
				<div className="flex flex-col justify-center items-center w-full ">
					<div className=" relative  overflow-hidden bg-cover bg-no-repeat space-y-4 rounded-3xl">
						<Image src="/BarraGarden.webp" alt="Imagem do condominio" width={800} height={800} className=" transition duration-300 ease-in-out hover:scale-110 backdrop-filter hover:blur-xs "/>
					</div>
				</div>
        
			</section>
     
		</main>
	)
}

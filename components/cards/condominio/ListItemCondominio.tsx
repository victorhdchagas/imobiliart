import Image from "next/image"
import React from "react"
import { FaMapMarked } from "react-icons/fa"
import { FaRegUser, FaUsers } from "react-icons/fa6"
import { RiAdminLine, RiCurrencyLine } from "react-icons/ri"
import ListItemCondominioEditBtn from "./ListItemCondominioEditBtn"
import DivAnimateHover from "@/components/ui/DivAnimateHover"
type CardProperties = {
    name:string;
    image?:string|null;
    id:string;
    totalManagers:number;
    totalHomers:number;
    totalValue:number;
}
export default function ListItemCondominio({image,name,totalHomers,totalManagers,totalValue,id}:CardProperties) {
	return (
		
		<DivAnimateHover className="min-w-[500px] max-auto flex flex-row justify-between gap-2 rounded-lg border border-gray-400 p-2 shadow-xl hover:rotate-1 transition-all ease-in-out basis-1/3">
			<div className="  overflow-hidden bg-cover bg-no-repeat space-y-4 rounded-lg">
				<Image src={image??"/no-results-found.png"} width={300} height={"200"} alt="Imagem do condominio" className="object-cover transition duration-300 ease-in-out hover:scale-110 backdrop-filter hover:blur-xs"/>
			</div>
			<div className="w-full flex flex-col gap-2 overflow-hidden">
				<div className="inline-flex w-full justify-between">
					<span className="text-xl capitalize ">{name}</span>
					<div className="pr-4 inline-flex gap-2 text-gray-500 pt-1">
						<span className="inline-flex gap-0.5"><RiAdminLine /> <span className="text-gray-400 text-xs">{totalManagers}</span></span>
						<span className="inline-flex gap-0.5"><FaRegUser /> <span className="text-gray-400 text-xs">{totalHomers}</span></span>
						<span className="inline-flex gap-0.5"><RiCurrencyLine /> <span className="text-gray-400 text-xs">R$ {totalValue}</span></span>
					</div>
				</div>
				<p className="w-full">
					<span className="text-md text-gray-800 italic self-end pr-10 flex-grow ">Tranquilidade para seu condominio</span>
				</p>
				<div className="place-self-end justify-self-end inline-flex gap-1 transition-all flex-grow-0">
					<ListItemCondominioEditBtn condominioId={id}/>
					<button className="bg-red-800 rounded-xl p-2 text-white transition-all group "><FaMapMarked className="w-3 h-3 group-hover:scale-125 group-hover:text-red-500"/></button>
					<button className="bg-cyan-800 rounded-xl p-2 text-white transition-all  overflow-hidden group"><FaUsers className="w-3 h-3 group-hover:scale-125 group-hover:text-cyan-500"/></button>
				</div>
			</div>
		</DivAnimateHover>
	)
}

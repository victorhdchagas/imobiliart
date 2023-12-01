"use client"
import BtnModalCondominio from "@/app/protected/admin/condominios/BtnModalCondominio"
import React from "react"
import { FaPencil } from "react-icons/fa6"

export default function ListItemCondominioEditBtn({condominioId}:{condominioId?:string}) {
	return (
		<BtnModalCondominio condominioId={condominioId} 
			className="bg-teal-800 rounded-xl p-2 text-white transition-all group "
			btnLabel={<FaPencil className="w-3 h-3 group-hover:scale-125 group-hover:text-teal-500"/>}
		/>
	)
}

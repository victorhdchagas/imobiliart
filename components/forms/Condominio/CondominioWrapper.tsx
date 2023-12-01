"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react"
const CondominioEdit = dynamic(()=>import("@/components/forms/Condominio/CondominioEdit"),{ssr:false,loading:()=><span>Carregando..</span>})
const CondominioAddress = dynamic(()=>import("@/components/forms/Condominio/CondominioAddress"))

export default function CondominioEditWrapper({condominioId}:{condominioId?:string}) {
	const [active,setActive] =useState("dados")
	return (
		<div className="flex flex-col w-full justify-between items-stretch">
			<div className="flex flex-row w-full justify-around items-stretch">
				<span className={"text-xl font-bold text-center w-full p-2 cursor-pointer ".concat(active==="dados"?"bg-blue-500":"")} onClick={()=>setActive("dados")}>Inicio</span>
				<div className={"text-xl font-bold text-center w-full p-2  ".concat(active==="endereco"?"bg-blue-500":"").concat(condominioId?" cursor-pointer":" cursor-not-allowed bg-gray-700")} aria-disabled={condominioId?false:true} onClick={()=>condominioId && setActive("endereco")}>Endereço</div>
			</div>
			{active=="dados" && <CondominioEdit condominioId={condominioId}/>}
			{active=="endereco" && condominioId && <CondominioAddress condominioId={condominioId}/>}
            
		</div>
	)
}


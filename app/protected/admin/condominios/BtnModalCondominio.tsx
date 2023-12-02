"use client";
import DialogFrame from "@/components/dialogs/dialogFrame";
import CondominioEditWrapper from "@/components/forms/Condominio/CondominioWrapper";
import React, { useState } from "react";
import { createPortal } from "react-dom";
export default function BtnModalCondominio({className,condominioId,btnLabel}:{btnLabel:JSX.Element,condominioId?:string,className?:string}) {
	const [open,setOpen] = useState<null|boolean>(null)
	return (
		<>
			<button className={className} onClick={()=>setOpen(state=>!state)}>
				{btnLabel}
			</button>
			{open && createPortal(<DialogFrame title={condominioId?"Editar Condominio":"Adicionar Condominio"} isOpen={!!open} onClose={()=>setOpen(false)} visible={open}>
				<CondominioEditWrapper condominioId={condominioId}/>
			</DialogFrame>,document.body)
			}
		</>
	)
}

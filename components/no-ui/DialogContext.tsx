"use client";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const _contextInitualValue = {
	setChildren:(children:React.ReactNode)=>{console.log("fazendo nada",children)}
}
export const ContextDialog = createContext(_contextInitualValue)


export function useDialog(){
	return useContext(ContextDialog)
}

export function DialogProvider({children}:PropsWithChildren){
	const [portalChildren,setChildren] = useState<React.ReactNode>(<></>);
	useEffect(()=>{
		console.log("setting children")
		createPortal(<div>Salveeeeeeeeeee</div>,document.body);
	},[portalChildren])
	return (
		<ContextDialog.Provider value={{setChildren:(ch:React.ReactNode) => {setChildren(ch)}}}>
			{children}
		</ContextDialog.Provider>
	)
}
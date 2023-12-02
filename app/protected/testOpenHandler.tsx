"use client"
import DialogFrame from "@/components/dialogs/dialogFrame"
import { PropsWithChildren, useState } from "react"
import { createPortal } from "react-dom"
// import Test2GetCondominios from "./test2GetCondominios"
// const Test2GetCondominios = dynamic(() => import("./test2GetCondominios"), {ssr:true,loading:()=><div>Loading...</div>})


export default function TestOpenHandler({children}:PropsWithChildren) {
	const [open,setOpen] = useState(false)
	// const {setChildren} = useDialog();
	// useEffect(
	// 	()=>{
	// 		console.log(open)
	// 		if(open)
	// 			setChildren(<DialogFrame visible={open} title="teste" isOpen={open} onClose={()=>setOpen(false)} >{children}</DialogFrame>);
	// 		return ()=>{
	// 			setChildren(<></>)
	// 		}
	// 	},[open])
	return (
		<>
			<button onClick={()=>setOpen(state=>!state)}>teste</button>
			{open && createPortal(
				<DialogFrame visible={open} title="teste" isOpen={open} onClose={()=>setOpen(false)} >
					{children}

					{/* <Test2GetCondominios  condominioId="clpl6w1ov00008vry2r1afj12"/> */}
				</DialogFrame>,document.body)} 
		</>		
			
	)
}

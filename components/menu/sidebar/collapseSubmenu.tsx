"use client"
import React from "react"
import { FaChevronUp } from "react-icons/fa6";
export default function CollapseSubmenu({children,className="",label}:React.PropsWithChildren<{className?:string,label:string}>) {
	const [show, setShow] = React.useState(true);
	return (
		<>
			<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white " onClick={()=>setShow(state=>!state)}>
				<i className="bi bi-chat-left-text-fill"></i>
				<div className="flex justify-between w-full items-center">
					<span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
					<span className={"text-sm transition-all ".concat(show?" rotate-180":" rotate-0")} id="arrow">
						<FaChevronUp />
					</span>
				</div>
			</div>
			<div
				className={"text-left flex flex-col text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold transition-all  ".concat(className).concat(show?" block opacity-100":" hidden opacity-10")}
			>
				{children}     
			</div>
		</>
	)
}

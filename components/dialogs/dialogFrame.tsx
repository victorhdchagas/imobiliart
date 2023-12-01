"use client"
import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export default function DialogFrame({children,title="Dialog",isOpen=false,onClose,visible:_visible}:{visible:boolean,onClose:()=>void,isOpen:boolean,title:string,children:React.ReactNode}) {
	if(!_visible) return null;
	return (
		<div className="fixed top-0 left-0 h-screen w-screen z-10 bg-slate-400 bg-opacity-50 flex justify-center items-center">
			<motion.dialog 
				variants={{
					hidden: { opacity: 0,y:-10 },
					visible
				}}
				animate={isOpen?"visible":"hidden"}
				open={isOpen}
				className="bg-slate-700 p-5 text-white  min-w-[500px] min-h-[200px] rounded-lg   m-auto overflow-auto z-20 flex flex-col justify-between items-stretch"
			>
				<span className="inline-flex w-full  justify-between text-xl font-bold capitalize select-none  flex-grow-0">{title} <FaRegWindowClose className="cursor-pointer " onClick={onClose}/></span>
				<div className="w-full border-b-slate-400 flex-grow overflow-auto flex flex-col items-stretch justify-stretch " >
					{children}
				</div>
			</motion.dialog>
		</div>
	)
}

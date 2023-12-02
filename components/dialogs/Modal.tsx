"use client";
import React, { ComponentProps } from "react"
import {motion} from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ClassProp, tv} from "tailwind-variants"
const Dialog = tv({
	base:"bg-slate-700 p-5 text-white  min-w-[500px] min-h-[200px] rounded-lg   m-auto overflow-auto z-20 flex flex-col justify-between items-stretch",
	variants:{
		animated:{
			true:"background-animate bg-gradient-to-r from-slate-700 via-gray-500 to-orange-500",
			false:"bg-slate-700"
		}
	},
	defaultVariants:{
		animated:false
	}
})
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
export default function Modal(props:{animateBackground?:boolean,title?:string,children:React.ReactNode} & ComponentProps<"dialog"> & ClassProp<typeof Dialog>) {
	const router = useRouter()
    
	return (
    
		<div className="fixed top-0 left-0 h-screen w-screen z-10 bg-slate-400 bg-opacity-50 flex justify-center items-center">
			<motion.dialog 
				variants={{
					hidden: { opacity: 0,y:-10 },
					visible
				}}
				className={Dialog({animated:props.animateBackground,className:props.className})}
			>
				<span className="inline-flex w-full  justify-between text-xl font-bold capitalize select-none  flex-grow-0">
					{props.title} <FaRegWindowClose className="cursor-pointer " onClick={()=>router.back()}/>
				</span>
				<div className="w-full border-b-slate-400 flex-grow overflow-auto flex flex-col items-stretch justify-stretch " >
					{props.children}
				</div>
			</motion.dialog>
		</div>
	)
}

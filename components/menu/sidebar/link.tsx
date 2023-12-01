import Link from "next/link"
import React from "react"

export default function SidebarLink({label, href,className="",pathname=""}:{label:string,href:string,className?:string,pathname?:string}) {
	return (
		<Link
			className={"p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white pl-7 ".concat(className).concat(pathname ===href?" bg-blue-800":"")}
			href={href} 
		>
			<span className=" p-2 rounded-md mt-1 font-bold " >{label}</span>
		</Link>
	)
}

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import React from "react"

export default function Sitemap() {
	const pathname =usePathname();
	const pathArray = pathname.split("/");
    
	return (
		<section className="flex flex-row w-full text-2xl text-teal-800 justify-start gap-4 py-4">{pathArray.map((name,index,arr)=><Link key={name} className="hover:animate-pulse capitalize" href={pathname.substring(0,pathname.lastIndexOf(name)+name.length)}>{name} {arr.length <= index+1 || index==0?"":">"}</Link>)}</section>
	)
}

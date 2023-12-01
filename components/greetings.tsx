"use client";
import { DefaultSession } from "next-auth";
import Image from "next/image";
import React from "react"

export default function Greetings({user}:{user?:DefaultSession["user"]}) {
	return (
		<div>
			{user && (
				<div>
					<Image src={user!.image??"/no-results-found.png"}  alt={user?.name??"Avatar"} width={48} height={48} className="rounded-full ring-1 ring-gray-900/5" />
				</div>)}
		</div>
	)
}

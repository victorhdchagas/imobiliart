"use client";
import { signOut } from "next-auth/react";
import React, { ComponentProps } from "react"
import {ClassProp, tv} from "tailwind-variants";

const DivWrapper = tv({
	base: "p-1.5 flex items-center font-bold rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white pl-7 ",
	
})

export default function LeaveButton(props:ComponentProps<"button"> & ClassProp<typeof DivWrapper>) {
	return (
		<div className={DivWrapper({className:props.className})} onClick={() => signOut()}>
			{props.children}
		</div>
	)
}

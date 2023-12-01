"use client"

import { useRouter } from "next/navigation"
import { ComponentProps, useTransition } from "react"
import {ClassProp, tv} from "tailwind-variants";

const Button = tv({
	base: "text-sm text-gray-500 hover:text-gray-900",
	variants: {
		isPending: {
			true: "cursor-not-allowed text-gray-400"
		},
	},
	defaultVariants:{
		isPending:false
	}
})
export default function RefreshButton(props:ComponentProps<"button"> & ClassProp<typeof Button>) {
	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	return (
		<button
			{...props}
			className={Button({isPending,className:props.className})}
			disabled={isPending}
			onClick={() => {
				startTransition(() => {
					router.refresh()
				})
			}}
		>
			{isPending ? "Refreshing..." : "Refresh"}
		</button>
	)
}

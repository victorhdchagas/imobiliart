import React from "react"
import { FaRegUser } from "react-icons/fa6"
import { RiAdminLine, RiCurrencyLine } from "react-icons/ri"

export default function FormSkeleton() {
	return (
		<div className="w-full flex flex-col gap-2 overflow-hidden">
			<div className="inline-flex w-full justify-between">
				<span className="h-6 bg-gray-400 rounded w-28"></span>
				<div className="pr-4 inline-flex gap-2 text-gray-500 pt-1">
					<span className="inline-flex gap-0.5"><RiAdminLine /> <span className="h-4 bg-gray-400 rounded w-4"></span></span>
					<span className="inline-flex gap-0.5"><FaRegUser /> <span className="h-4 bg-gray-400 rounded w-6"></span></span>
					<span className="inline-flex gap-0.5"><RiCurrencyLine /> <span className="h-4 bg-gray-400 rounded w-8"></span></span>
				</div>
			</div>
			<p className="w-full inline-flex">
				<span className="h-12 bg-gray-400 rounded w-full "></span>
			</p>
			<div className="place-self-end justify-self-end inline-flex gap-1 transition-all flex-grow-0 bg-gray-200">
				<div className="rounded-lg bg-gray-400 h-6 w-6"></div>
				<div className="rounded-lg bg-gray-400 h-6 w-6"></div>
				<div className="rounded-lg bg-gray-400 h-6 w-6"></div>
				<div className="rounded-lg bg-gray-400 h-6 w-6"></div>
			</div>
		</div>
	)
}

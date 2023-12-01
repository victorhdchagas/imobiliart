"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
export default function SearchQueryParams() {
	const searchParams = useSearchParams();
	const {replace} = useRouter();
	const pathname = usePathname();

	const handleSearch = useDebouncedCallback((term) => {
		if(!searchParams)return;
		const params = new URLSearchParams(searchParams);

		params.set("page", "1");
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	},300);
	return (
		<section className="relative flex flex-shrink-0 md:w-full">
			<label className="sr-only">Search</label>
			<input type="text"
				className="px-2 pl-8 py-1 w-full border border-slate-800 rounded-l-md bg-slate-800 text-slate-200"
				placeholder="Search"
				defaultValue={searchParams?.get("query")??""}
				onChange={(e)=>handleSearch(e.target.value)}
				autoFocus
			/>
			<FaSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</section>
        
	);
}

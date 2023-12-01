
// import ListItemCondominio from "@/components/cards/condominio/ListItemCondominio";
import { DefaultPagination } from "@/app/@types";
import SkeletonListItemCondominio from "@/components/cards/condominio/SkeletonListItemCondominio";
import Pagination from "@/components/search/paginations/Pagination";
import { listCondominiums } from "@/lib/actions/condominio";
import dynamic from "next/dynamic";
import React, { Suspense } from "react"

const ListItemCondominio = dynamic(() => import("@/components/cards/condominio/ListItemCondominio"), {
	suspense: true,
	ssr:false
})
  
export default async function ListCondominioWrapper({query}:{query:string}) {
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="flex flex-row items-center justify-center gap-2 flex-wrap">
				<Suspense key={query} fallback={[1,2,3,4].map((i) =><SkeletonListItemCondominio key={i}/>)}>
					<SyncListCondominioWrapper query={query} offset={0} size={4}/>
				</Suspense>
			</div>
			<Pagination totalPages={2} />
		</div>
	)
}

async function SyncListCondominioWrapper({query,offset,size}:{query:string} & DefaultPagination) {
	console.time(query);
	const sleepFn = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	const getData = async () => {
		await sleepFn(1000);
		console.log(offset,size)
		console.timeEnd(query);
        
		return listCondominiums();
	}
	const data = await getData();
	return (
		<div className="flex flex-row items-center justify-center gap-2 flex-wrap">
			{data.map((condominium,i) =><ListItemCondominio key={condominium.id} id={condominium.id} name={condominium.name} image={condominium.image} totalManagers={i+1} totalHomers={i*i*3} totalValue={i*i*6*20}/>)}
				
		</div>
	)
}

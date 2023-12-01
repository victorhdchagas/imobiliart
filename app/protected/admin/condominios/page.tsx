import { DefaultPageProps } from "@/app/@types";
import SearchQueryParams from "@/components/search/searchInputs/SearchQueryParams";
import BtnModalCondominio from "./BtnModalCondominio";
import ListCondominioWrapper from "./ListCondominioWrapper";
// app/posts/page.ts
  
export default async function CondominioPage({searchParams}:DefaultPageProps) {

	return (
		<main className={"container xl:p-10"}>
			<div className="w-[500px] mx-auto flex flex-row ">
				<SearchQueryParams/>
				<BtnModalCondominio className="px-2  py-1  border border-slate-800 rounded-r-md bg-slate-800 hover:bg-slate-600 text-center text-slate-200 whitespace-nowrap capitalize cursor-pointer" btnLabel={<>Adicionar novo</>}/>
			</div>
			<h2 className="text-3xl text-gray-800 font-extrabold">Condominios</h2>
			<ListCondominioWrapper query={searchParams.query??"Marinas"} />
            
		</main>
	)
}

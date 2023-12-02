import { getCondominio } from "@/lib/actions/condominio";

export default async function TestCreateCondominio({condominioId}:{condominioId?:string}) {
	const condominio = await getCondominio(condominioId);
	
	return (
		<div>{JSON.stringify(condominio)}</div>
	)
}

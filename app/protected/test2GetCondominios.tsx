import TestCreateCondominio from "./TestCreateCondominio";
// const TestCreateCondominio = dynamic(() => import("./TestCreateCondominio"), {ssr:false,loading:()=><div>Loading...</div>})

export default async function Test2GetCondominios({condominioId}:{condominioId?:string}) {
	
	return (
		<TestCreateCondominio condominioId={condominioId}/>
	)
}

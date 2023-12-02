import Modal from "@/components/dialogs/Modal"
import CondominioEdit from "@/components/forms/Condominio/CondominioEdit"
import { getCondominio } from "@/lib/actions/condominio"

export default async function ModalCondominio({params}:{params:{id:string}}) {
	console.log(params)
	const condominio =await getCondominio(params.id)
    
	return (
		<Modal title="Editar Condominio">
			<CondominioEdit  condominio={condominio!}/>
		</Modal>
	)
}

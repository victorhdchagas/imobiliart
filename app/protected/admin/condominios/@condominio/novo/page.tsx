import Modal from "@/components/dialogs/Modal"
import CondominioEdit from "@/components/forms/Condominio/CondominioEdit"
import React from "react"

export default async function ModalCondominio() {
	return (
		<Modal title="Adicionar Condominio">
			<CondominioEdit />
		</Modal>
	)
}

import Modal from "@/components/dialogs/Modal";
import { FaSpinner } from "react-icons/fa6";

export default function Loading(){
	return (
		<Modal title="Carregando..."  animateBackground={true}>
			<div className="inline-flex text-5xl m-auto"><FaSpinner className="animate-spin "/></div>
		</Modal>
	)
}
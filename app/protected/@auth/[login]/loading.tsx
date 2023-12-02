import Modal from "@/components/dialogs/Modal";
import { FaSpinner } from "react-icons/fa6";

export default function Loading(){
	return (
		<Modal>
			<div>Loading... <FaSpinner className="animate-spin"/></div>
		</Modal>
	)
}
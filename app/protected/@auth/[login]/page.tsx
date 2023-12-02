import Modal from "@/components/dialogs/Modal";
import { getUser } from "@/lib/actions/user";
 
export default async function AuthPage({params}:{params:{login:string}}) {
	const user = await getUser(params.login);
	console.log(user,params.login)
	return (
		<Modal>
			{user?.name}
		</Modal>
	)
}
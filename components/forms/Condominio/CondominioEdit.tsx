import { updateCondominio } from "@/lib/actions/condominio"
import React from "react"
import { DefaultSubmitButton, Input, InputWrapper } from "../input/DefaultInput";
//@ts-expect-error issue with types
import { useFormState} from "react-dom";
import InlineFormError from "../inlineFormError";

export default function CondominioEdit({condominioId}:{condominioId?:string}) {
	const initialValue = {
		message: null,
		errors: {}
	};
	const [state,dispatch] = useFormState(updateCondominio,initialValue)

	return (
		<form action={dispatch} className="flex flex-col justify-between items-stretch grow py-2 gap-2">
			<InputWrapper name="imagem">
				<input type="file" accept="image/*" name="image" />
				<InlineFormError  errors={state.errors?.image} id="image-error"/>
                
			</InputWrapper>
			<Input name="nome" autoFocus={true}/>
			<InlineFormError  errors={state.errors?.nome} id="name-error"/>
			<input type="hidden" name="id" value={String(condominioId)} />
            
			<DefaultSubmitButton/>
		</form>
	)
}


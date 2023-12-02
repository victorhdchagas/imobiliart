"use client"
import { updateCondominio } from "@/lib/actions/condominio";
import { DefaultSubmitButton, Input, InputWrapper } from "../input/DefaultInput";
//@ts-expect-error issue with types
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import InlineFormError from "../inlineFormError";

export default function CondominioEdit({condominio}:{condominio?:{
    id: string;
    name: string;
    image: string | null;
    userId: string;
} }) {
	const initialValue = {
		message: null,
		errors: {}
	};
	const router = useRouter();
	const [state,dispatch] = useFormState(updateCondominio,initialValue)
	useEffect(()=>{
		console.log(state)
		if(state.message && state.message =="ok"){
			router.back();
		}
	},[state])
	return (
		<form action={dispatch} className="flex flex-col justify-between items-stretch grow py-2 gap-2">
			<InputWrapper name="imagem">
				<input type="file" accept="image/*" name="image" />
				<InlineFormError  errors={state.errors?.image} id="image-error"/>
                
			</InputWrapper>
			<Input name="nome" autoFocus={true} defaultValue={condominio?.name}/>
			<InlineFormError  errors={state.errors?.nome} id="name-error"/>
			<input type="hidden" name="id" defaultValue={condominio?.id??""} />
            
			<DefaultSubmitButton/>
		</form>
	)
}


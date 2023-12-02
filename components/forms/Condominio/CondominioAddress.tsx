import { createCondominioAddress, getCep } from "@/lib/actions/condominio"
import React, { useEffect, useRef, useState } from "react"
import { DefaultSubmitButton, Input } from "../input/DefaultInput";
//@ts-expect-error issue with types
import { useFormState} from "react-dom";
import InlineFormError from "../inlineFormError";
import Utils from "@/lib/utils";

export default function CondominioAddress({condominioId}:{condominioId?:string}) {
	const formRef = useRef<HTMLFormElement|null>(null)
	const [cep,setCep] =useState("");
	const initialValue = {
		message: null,
		errors: {}
	};
	useEffect(()=>{
		if(Utils.onlyDigitsFromString( cep).length==8){
			const search = async ()=>{
				
				const data = await getCep(cep);
				if(formRef.current){
					formRef.current["logradouro"].value = data.street
					formRef.current["bairro"].value = data.neighborhood
					formRef.current["estado"].value = data.state
					// formRef.current["latitude"].value = data.lat
					// formRef.current["longitude"].value = data.lon
					formRef.current["numero"].focus();
				}
			};
			search();
		}
        
	},[cep])
	const [state,dispatch] = useFormState(createCondominioAddress,initialValue)
	return (
		<form action={dispatch} className="flex flex-col justify-between items-stretch grow py-2 gap-2" ref={formRef}>
			<div>
				<Input name="cep" autoFocus={true} onChange={(e:any)=>setCep(e.target.value)} maxLength={8} type="number"/>
				<InlineFormError  errors={state.errors?.cep} id="cep-error"/>
			</div>
			<div>
				<Input name="logradouro"  />
				<InlineFormError  errors={state.errors?.logradouro} id="logradouro-error"/>
			</div>
			<div>
				<Input name="numero" />
				<InlineFormError  errors={state.errors?.numero} id="numero-error"/>
			</div>
			<div>
				<Input name="complemento" />
				<InlineFormError  errors={state.errors?.complemento} id="complemento-error"/>
			</div>
			<div>
				<Input name="bairro" />
				<InlineFormError  errors={state.errors?.bairro} id="bairro-error"/>
			</div>
			<div>
				<Input name="estado" />
				<InlineFormError  errors={state.errors?.estado} id="estado-error"/>
			</div>
			<div>
				<Input name="latitude" />
				<InlineFormError  errors={state.errors?.latitude} id="latitude-error"/>
			</div>
			<div>
				<Input name="longitude" />
				<InlineFormError  errors={state.errors?.longitude} id="longitude-error"/>
			</div>
			<input type="hidden" name="id" value={String(condominioId)} />
            
			<DefaultSubmitButton/>
		</form>
	)
}


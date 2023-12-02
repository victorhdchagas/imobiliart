"use client"
//@ts-expect-error type issue
import {useFormStatus} from "react-dom"
import { FaSpinner } from "react-icons/fa6"
export function Input(props:{type?:string,maxLength?:number,onChange?:(value:unknown)=>void,action?:(value:FormData)=>void,disabled?:boolean,required?:boolean,name:string,defaultValue?:string,autoFocus?:boolean}) {

	return (
		<InputWrapper name={props.name}>
			<input type="text" className="bg-transparent border-b border-gray-200 px-2 pb-1 pt-2 focus:bg-slate-800 focus:animate-pulse focus:outline-none" 
				{...props}/>
		</InputWrapper>
	)

}

export function InputWrapper({name,children}:{name:string,children:React.ReactNode}) {
	return (<div className="flex flex-col group ">
		<label htmlFor={name} className="font-bold capitalize select-none">{name}</label>
		{children}
	</div>
	)
}

export function DefaultSubmitButton(){
	const {pending} = useFormStatus()
	return (
		<button type="submit" className="justify-self-end place-self-center p-2 bg-blue-500 text-white rounded-md " disabled={pending}> {pending ? <FaSpinner className="animate-spin px-5" /> : "Enviar"} </button>

	)   
}
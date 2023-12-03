"use client";

import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function UploadImageButton({enableEdit,onGetImagePath}:{enableEdit?:boolean,onGetImagePath?:(path:string)=>void}) {
	const [file,setFile] = useState<File>()
	const fileRef = useRef<HTMLInputElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)
	const onClickHandler = ()=>{
		if(enableEdit){
			fileRef.current?.click();
		}
	}
	const onChangeHandler = ()=>{
		const files =fileRef.current?.files;
		if(files && files.length > 0)
			if(imageRef.current) {
				setFile(files[0])
			}
	}
        
	useEffect(()=>{
		const url:string|null=null;
		if(file instanceof File){
                imageRef.current!.src = URL.createObjectURL(file)
                if(onGetImagePath){
                	onGetImagePath("");
                }
		}
		return ()=>{
			if(url!==null)
				URL.revokeObjectURL(url)
		}
	},[file])
	return (
		<div 
			className="relative h-28 w-36 rounded-3xl shadow-lg   flex justify-center items-center overflow-hidden
             group cursor-pointer
             p-2
             object-contain
             bg-gradient-to-b
             from-slate-300
             to-slate-500
             "
			onClick={onClickHandler}>
			<img src="/no-results-found.png" alt="upload de imagem"
				className="object-contain w-auto h-full "
				ref={imageRef}/>
			{enableEdit && <FaEdit className=" absolute text-slate-700 transition-all p-1 rounded-full
            bg-slate-200
            object-contain
            top-2 left-2 group-hover:m-auto group-hover:left-6
            w-6 h-6  group-hover:w-24 group-hover:h-24
            group-hover:opacity-50 
            group-hover:bg-opacity-30 
            "/>}
			<input type="file" className="hidden" ref={fileRef} accept="image/*" onChange={onChangeHandler} max={1}/>

		</div>
	)
}

import { DefaultPagination } from "@/app/@types";
import CondominiumAdapter from "@/core/adapters/condominium/condominium-adapter";
import CondominiumAddressAdapter from "@/core/adapters/condominium/condominium-address-adapter";
import CondominiumService from "@/core/services/condominium-service";
import ImageFileSystemStorage from "@/core/services/image-fs-storage";
import ImageService from "@/core/services/image-service";
import prisma from "@/lib/prisma";
import {z} from "zod";
import { condominioSchema } from "@/lib/schemas/condominio-schema";
import { mountFileSchema } from "@/lib/schemas/file-schema";
export default class CondominioFacade{
	private addressAdapter:CondominiumAddressAdapter = new CondominiumAddressAdapter();
	private adapter:CondominiumAdapter= new CondominiumAdapter(this.addressAdapter);
	private service:CondominiumService = new CondominiumService(prisma);
	private imageService:ImageService = new ImageService(new ImageFileSystemStorage());
	constructor(){}

	search(params:string,pagination:DefaultPagination={size:4,offset:0} ){
		return this.service.searchByQueryString(params,pagination);
	}
    
	getById(id?:string){
		if(!id) throw new Error("not implemented");
		return this.service.getUnique({id})
	}

	async publishImage(image:File){
		return await this.imageService.uploadFile(Buffer.from(await image.arrayBuffer()))

	}

	validateImage(image:File|null,{size=500_000,types=["image/jpeg", "image/jpg", "image/png"]}:{size?:number,types?:string[]}){
		if(image == null) throw new Error("not implemented");
		const validatedImage = mountFileSchema(size,types).safeParse(image);
		if(!validatedImage.success){
			console.log(validatedImage.error.formErrors.fieldErrors)
			return {errors:validatedImage.error.formErrors.fieldErrors}
		}
		return {success:true,data:validatedImage.data}
	}

	create(params:{nome:string,userId:string,imagem?:string}){
		// return this.service.create(params)

	}

	validateCreate(params:any){
		return this.validateZod<z.infer<typeof condominioSchema>>(params,condominioSchema)
		// const validatedData = condominioSchema.safeParse(params);
		// if(!validatedData.success){
		// 	return {success:false,errors:validatedData.error.formErrors.fieldErrors}
		// }else{
		// 	return {success:true,data:validatedData.data}
            
		// }
		// // return validatedData.data
	}

	private validateZod<T>(data:any,schema:z.ZodSchema<T>){
		const validatedData = schema.safeParse(data);
		if(!validatedData.success){
			return {success:false,errors:validatedData.error.formErrors.fieldErrors}
		}else{
			return {success:true,data:validatedData.data}
		}
	}
        

	update(){

	}


}
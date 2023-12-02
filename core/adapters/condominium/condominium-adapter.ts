import CondominiumModel from "@/core/models/condominium/condominium-model";
import { Adapter } from "../interface-formatter";
import { CondominioDTO } from "@/lib/actions/dto/condominio-dto";
import CondominiumAddressModel from "@/core/models/condominium/condominium-address-model";

export default class CondominiumAdapter implements Adapter{
	constructor(private readonly addressAdapter:Adapter){
        
	}
	format(data:unknown):CondominiumModel {
		
		if(data instanceof CondominioDTO){
			const model = new CondominiumModel(data.nome,data.imagem,undefined,data.id);
			if(data.endereco) model.setAddress(this.addressAdapter.format(data.endereco) as CondominiumAddressModel);
			return model;
		}
        
        
		throw new Error("not implemented")
	}

	
}
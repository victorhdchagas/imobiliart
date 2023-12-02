import CondominiumAddressModel from "@/core/models/condominium/condominium-address-model";
import CondominioEnderecoDTO from "@/lib/actions/dto/condominio-endereco-dto";
import { Adapter } from "../interface-formatter";

export default class CondominiumAddressAdapter implements Adapter{
	constructor(){
        
	}
	format(data:unknown):CondominiumAddressModel {
		
		if(data instanceof CondominioEnderecoDTO){
			const model = new CondominiumAddressModel(
				data.logradouro,
				data.numero,
				data.complemento,
				data.bairro,
				data.cidade,
				data.estado,
				data.cep,
				data.condominioId,
                
                
			);
			if(data.id) model.setId(data.id);
			if(data.latitude) model.setLat(data.latitude);
			if(data.longitude) model.setLon(data.longitude);
			return model;

		}
		throw new Error("not implemented")
	}

	
}
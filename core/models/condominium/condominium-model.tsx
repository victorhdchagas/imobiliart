import CondominiumAddressModel from "./condominium-address-model";

export default class CondominiumModel{
	public address?:CondominiumAddressModel;
	constructor(
        public readonly name:string,
        public image?:string,
        address?:CondominiumAddressModel,
        public  id?:string
	){
		if(address)
			this.setAddress(address);
	}
    
	setAddress(address:CondominiumAddressModel){
		this.address = address
	}

	setId(id:string){
		this.id = id
	}
    
	setImage(image:string){
		this.image = image
	}
}
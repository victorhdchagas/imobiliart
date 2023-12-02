import AddressModel from "../address/address-model";

export default class CondominiumAddressModel extends AddressModel{
	constructor(
		street: string,
		number: string,
		complement: string,
		district: string,
		city: string,
		state: string,
		zip: string,
        public readonly condominiumId:string,
        id?:number,
        latitude?:string,
        longitude?:string,
        

	){ super(street,number,complement,district,city,state,zip,id,latitude,longitude)}
 
	setId(id:number){
		this.id = id
	}
	setLat(lat:string){
		this.lat = lat
	}
	setLon(lon:string){
		this.lon = lon
	}

}
export default class AddressModel {
	constructor(
        public readonly street: string,
        public readonly number: string,
        public readonly complement: string,
        public readonly district: string,
        public readonly city: string,
        public readonly state: string,
        public readonly zip: string,
        public id?:number,
        public lat?:string,
        public lon?:string
	){}
	toString(){
		return `${this.street}, ${this.number}, ${this.complement}, ${this.district}, ${this.city}, ${this.state}, ${this.zip}`
	}
}
import CondominiumAddressModel from "./condominium-address-model";
import CondominiumModel from "./condominium-model";

describe("Model",()=>{

	it("should be defined",()=>{
		const model = new CondominiumModel("Teste","image",new CondominiumAddressModel("street","number","complement","neighborhood","city","state","zip","condominiumId"));
		expect(model).toBeDefined()
	})

	it("should test toString",()=>{
		const model = new CondominiumModel("Teste","image",new CondominiumAddressModel("street","number","complement","neighborhood","city","state","zip","condominiumId"));
		expect(model.address.toString()).toBe("street, number, complement, neighborhood, city, state, zip")
	})
})
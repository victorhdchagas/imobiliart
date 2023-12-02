export default class UserModel {

	constructor(
            public readonly name: string,
            public readonly email: string,
            public readonly image: string,
            public readonly id?: string
	){}
}
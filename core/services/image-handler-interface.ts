export default interface  ImageHandlerInterface { 

    uploadImage(file:Buffer):Promise<string>
}
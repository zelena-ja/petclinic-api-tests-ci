import got from "got"

export class PetController{
    async getById(id: number | string){
        const response = await got(`https://rest.sana-commerce.dev:443/petclinic/api/pets/${id}`)
        return JSON.parse(response.body)
    }
}
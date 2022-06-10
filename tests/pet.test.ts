import got from 'got'
import {strict as assert} from 'assert'
import {PetController} from '../controllers/pet.controller'

const pet = new PetController()

describe('User can', function(){
    it('receive pet by id', async function(){
        const response = await pet.getById(21)

        assert(response.id==21, 'expected to receive pet with Id=21 but got ${response.id}')
    })
})
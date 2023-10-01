import { expect } from 'chai';
import { describe } from 'mocha';
import { stub } from 'sinon';
import { HotelService } from '../../src/service/hotel.service';
import { HotelRepository } from '../../src/database/model/repository/Hotel.repository';

describe('Testa a classe hotel', ()=> {
  const hotelRepository = new HotelRepository();
  const hotelService = new HotelService(hotelRepository);

  it('Ao cadastrar um novo hotel deve retornar um result com id e status code 201', async () => {
    stub(hotelRepository, 'insertOne').resolves([{ id: 1 }] as any);

    const hotel = {
      nome: 'Rafhael',
      cnpj: '08887538530',
      pais: 'Brasil',
      estado: 'Bahia',
      cidade: 'Bom Jesus da lapa'
    }

    const createHotel = await hotelService.insertHotel(hotel);

    expect(createHotel).to.deep.equal({ message: 'Hotel cadastrado com sucesso', statusCode: 201, result: { id: 1 }})
    
  })

  it('Se tentar inserir um novo hotel sem enviar o nome retorna status code 401 e mensagem "O nome é obrigatório"', async () => {
    const hotel = {
      nome: '',
      cnpj: '08887538530',
      pais: 'Brasil',
      estado: 'Bahia',
      cidade: 'Bom Jesus da lapa'
    }

    const createHotel = await hotelService.insertHotel(hotel);

    expect(createHotel).to.deep.equal({ validate: false, message: 'O Nome é obrigatório' , statusCode: 401 })

  })
});
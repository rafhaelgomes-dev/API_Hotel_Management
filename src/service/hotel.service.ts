import { Hotel } from "../database/model/entitites/Hotel";
import { HotelRepository } from "../database/model/repository/Hotel.repository";
import { IMessage } from "../interfaces/IMessage";

export class HotelService {
  private HotelRepository: HotelRepository;

  constructor() {
    this.HotelRepository = new HotelRepository();
  }

  public insertHotel = async (data: Hotel): Promise<IMessage> => {
    const { nome, cnpj, pais, estado, cidade  } = data;

    if (!nome || nome.length === 0) {
      return { message: 'O Nome é obrigatório' , statusCode: 401 };
    }

    if (!cnpj || cnpj.length === 0) {
      return { message: 'O cnpj é obrigatório' , statusCode: 401 };
    }

    if (!pais || pais.length === 0) {
      return { message: 'O pais é obrigatório' , statusCode: 401 };
    }

    if (!estado || estado.length === 0) {
      return { message: 'O estado é obrigatório' , statusCode: 401 };
    }

    if (!cidade || cidade.length === 0) {
      return { message: 'O cidade é obrigatório' , statusCode: 401 };
    }

    await this.HotelRepository.insertOne(data);

    return { message: 'Hotel cadastrado com sucesso', statusCode: 201 };
  };
};
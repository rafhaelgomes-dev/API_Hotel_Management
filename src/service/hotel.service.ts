import { Hotel } from "../database/model/entitites/Hotel";
import { HotelRepository } from "../database/model/repository/Hotel.repository";
import { IMessage } from "../interfaces/IMessage";
import { validate } from "../utils/validateHotel";

export class HotelService {
  private HotelRepository: HotelRepository;

  constructor() {
    this.HotelRepository = new HotelRepository();
  }

  public insertHotel = async (data: Hotel): Promise<IMessage> => {
    const validateData = validate(data);
    if (!validateData.validate) {
      return validateData;
    }
    await this.HotelRepository.insertOne(data);
    return { message: 'Hotel cadastrado com sucesso', statusCode: 201 };
  };
};
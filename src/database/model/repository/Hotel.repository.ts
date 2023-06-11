import { IRepository } from "../../../interfaces/IRepository";
import { Hotel } from "../entitites/Hotel";
import db from '../../config/connection';

export class HotelRepository implements IRepository {
  public insertOne = async (data: Hotel): Promise<void> => {
    const result = await db.raw(`insert into tb_hotel (nome, cnpj, pais, estado, cidade) values(?, ?, ?, ?, ?)`, [data.nome, data.cnpj, data.pais, data.estado, data.cidade]);
    return result
  };
}
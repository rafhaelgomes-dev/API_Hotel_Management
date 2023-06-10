import { IRepository } from "../../../interfaces/IRepository";
import { Hotel } from "../entitites/Hotel"

export class HotelRepository implements IRepository {
  private Hotel: Hotel;
  constructor(Hotel: Hotel) {
    this.Hotel = Hotel;
  }

  public findAll = (): Hotel[] => {
    return [{
      nome:'1',
      cnpj:'123',
      pais:'Brasil',
      estado:'São Paulo',
      cidade:'São Paulo'
      }
    ];
  }

  public insertOne = () => {

  }

  public updateOne = () => {

  }
}
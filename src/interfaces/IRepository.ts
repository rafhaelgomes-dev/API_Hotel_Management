import { Hotel } from "../database/model/entitites/Hotel";

export interface IRepository {
  insertOne(data: Hotel): Promise<void>;
}
import { Hotel } from "../database/model/entitites/Hotel";

export interface IRepository {
  findAll(): Hotel[];
  insertOne(): any;
  updateOne(): any;
}
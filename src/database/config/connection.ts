import { knex, Knex} from 'knex';
import knexfile from '../knexfile';

const db: Knex = knex(knexfile);

export default db;
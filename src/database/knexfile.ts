export default  {
  client: 'pg',
  connection: {
    host: "localhost",
    port: 5432,
    database: "hotel_management",
    user: "postgres",
    password: "admin",
},
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'migrations'
  },
  timezone: 'UTC'
};
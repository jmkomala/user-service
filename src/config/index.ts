interface CONFIG {
  APP_ADDRESS: string;
  APP_PORT: number;
  [key: string]: any;
}
const config: CONFIG = {
  PG: {
    PG_USERNAME: "admin",
    PG_PASSWORD: "password",
    PG_PORT: 5432,
    PG_HOST: "localhost",
    PG_DB_NAME: "mypostgresdb", // Replace with your actual database name
    PG_MAX_CLIENTS: 20, // Maximum number of clients in the pool
    PG_IDLE_TIMEOUT: 30000, // wait in ms client can be idle before closing
    PG_CONNECTION_TIMEOUT: 2000, // wait in ms to wait for a connection to be established
  },
  APP_ADDRESS: process.env.APP_ADDRESS || "0.0.0.0",
  APP_PORT: Number(process.env.APP_PORT) || 3000,
};

export default config;

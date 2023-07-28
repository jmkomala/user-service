import { Pool, PoolConfig } from "pg";
import config from "../config";
const { PG } = config;

const dbConfig: PoolConfig = {
  user: PG.PG_USERNAME,
  password: PG.PG_PASSWORD,
  host: PG.PG_HOST,
  port: PG.PG_PORT,
  database: PG.PG_DB_NAME,
  max: PG.PG_MAX_CLIENTS,
  idleTimeoutMillis: PG.PG_IDLE_TIMEOUT,
  connectionTimeoutMillis: PG.PG_CONNECTION_TIMEOUT,
};

// create a new Pool instance based on the configuration
const pool = new Pool(dbConfig);

// listen to pool events for logging or error handling
pool.on("connect", () => {
  console.log("Connected to the database");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;

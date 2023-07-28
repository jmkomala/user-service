// index.ts
import app from "./app";
import config from "./config";
import pool from "./db/postgres-connection";

const options = {
  host: config.APP_ADDRESS,
  port: config.APP_PORT,
};

const start = async () => {
  try {
    await pool.connect();
    await app.listen(options);
    console.log(`Server is running on http://localhost:${config.APP_PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

import app from "./app";
import config from "./config";
import pool from "./db/postgres-connection";

const { APP_ADDRESS, APP_PORT } = config;

const start = async () => {
  try {
    await pool.connect(); // Establish database connection

    app.listen(APP_PORT, APP_ADDRESS, () => {
      console.log(`Server is running on http://${APP_ADDRESS}:${APP_PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();

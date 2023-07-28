// index.ts
import app from "./app";
import config from "./config";

const options = {
  host: config.address,
  port: config.port,
};

const start = async () => {
  try {
    await app.listen(options);
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

import express from "express";
import routes from "./routes";

// Step 1: Create an instance of the Express application
const app = express();

// Step 2: Configure the application middleware (if needed)
// For example, to parse incoming JSON requests
app.use(express.json());

// Step 3: Mount your custom routes on the application
app.use(routes);

// Step 5: Export the Express application
export default app;

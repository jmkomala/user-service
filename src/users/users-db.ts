import db from "../db/postgres-connection";

// Function to get data from the feature1 table
export async function getUsers() {
  // Perform the SQL query using the db client
  const result = await db.query("SELECT * FROM USERS");
  return result.rows;
}

// Function to create a new record in the feature1 table
export async function createUser(data: any) {
  const insertQuery = "INSERT INTO USERS (username, email) VALUES ($1, $2)";
  const values = [data.username, data.email];

  // Execute the query with parameterized values to prevent SQL injection
  const result = await db.query(insertQuery, values);
  return result;
}

import db from "../db/postgres-connection";
/**
 *
 * @r
 */
export async function getUsers() {
  const result = await db.query("SELECT * FROM USERS");
  return result.rows;
}

export async function createUser(data: any) {
  const insertQuery = `
  INSERT INTO USERS (username, email)
  VALUES ($1, $2)
  RETURNING *
`;
  const values = [data.username, data.email];

  // Execute the query with parameterized values to prevent SQL injection
  const result = await db.query(insertQuery, values);
  return result.rows[0];
}
